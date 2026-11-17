// Conexión con el CRM (GoHighLevel · API v2).
// Variables de entorno (solo servidor, nunca NEXT_PUBLIC_):
//   GHL_TOKEN        → token de la Integración privada de la subcuenta UDS
//   GHL_LOCATION_ID  → ID de la subcuenta UDS
// Alcances del token: contacts.write y locations/customValues.readonly

const API = "https://services.leadconnectorhq.com";
const VERSION = "2021-07-28";

const credenciales = () => {
  const token = process.env.GHL_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  return token && locationId ? { token, locationId } : null;
};

const headers = (token: string) => ({
  Authorization: `Bearer ${token}`,
  Version: VERSION,
  Accept: "application/json",
  "Content-Type": "application/json",
});

/**
 * Valores personalizados de la subcuenta, por nombre.
 * La UDS los edita en el CRM (Configuración → Valores personalizados)
 * y las landings se actualizan solas cada 5 minutos.
 */
export async function getValoresCRM(): Promise<Record<string, string>> {
  const c = credenciales();
  if (!c) return {};
  try {
    const res = await fetch(`${API}/locations/${c.locationId}/customValues`, {
      headers: headers(c.token),
      next: { revalidate: 300, tags: ["valores-crm"] },
    });
    if (!res.ok) return {};
    const json = (await res.json()) as { customValues?: { name: string; value: string }[] };
    const out: Record<string, string> = {};
    for (const v of json.customValues ?? []) {
      if (v.value?.trim()) out[v.name.trim()] = v.value.trim();
    }
    return out;
  } catch {
    return {};
  }
}

type ValorCRM = { id: string; name: string; value: string };

/** Lista sin caché (para el portal de edición). */
export async function listarValoresCRM(): Promise<ValorCRM[] | null> {
  const c = credenciales();
  if (!c) return null;
  const res = await fetch(`${API}/locations/${c.locationId}/customValues`, { headers: headers(c.token), cache: "no-store" });
  if (!res.ok) return null;
  const json = (await res.json()) as { customValues?: ValorCRM[] };
  return json.customValues ?? [];
}

/** Crea o actualiza un Valor personalizado por nombre. Requiere locations/customValues.write */
export async function guardarValorCRM(existentes: ValorCRM[], name: string, value: string): Promise<boolean> {
  const c = credenciales();
  if (!c) return false;
  const actual = existentes.find(v => v.name.trim() === name);
  if (actual && actual.value === value) return true;
  const url = actual
    ? `${API}/locations/${c.locationId}/customValues/${actual.id}`
    : `${API}/locations/${c.locationId}/customValues`;
  const res = await fetch(url, {
    method: actual ? "PUT" : "POST",
    headers: headers(c.token),
    body: JSON.stringify({ name, value }),
    cache: "no-store",
  });
  if (!res.ok) console.error("[portal] GHL", res.status, await res.text().catch(() => ""));
  return res.ok;
}

export type Prospecto = {
  nombre: string;
  email: string;
  telefono: string;
  tags: string[];
  fuente: string;
};

/** Crea o actualiza el contacto en el CRM con sus etiquetas de programa, campus y turno. */
export async function registrarProspecto(p: Prospecto): Promise<{ ok: boolean; status: number }> {
  const c = credenciales();
  if (!c) return { ok: false, status: 503 };
  const [firstName, ...resto] = p.nombre.trim().split(/\s+/);
  const res = await fetch(`${API}/contacts/upsert`, {
    method: "POST",
    headers: headers(c.token),
    body: JSON.stringify({
      locationId: c.locationId,
      firstName,
      lastName: resto.join(" ") || undefined,
      name: p.nombre.trim(),
      email: p.email.trim().toLowerCase(),
      phone: p.telefono,
      tags: p.tags,
      source: p.fuente,
    }),
    cache: "no-store",
  });
  return { ok: res.ok, status: res.status };
}
