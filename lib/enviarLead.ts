// Envía el prospecto a /api/lead (el servidor lo registra en el CRM con sus etiquetas).
export async function enviarLead(
  slug: string,
  form: { nombre: string; email: string; telefono: string; _gotcha?: string },
  fuente: "formulario" | "popup-beca",
): Promise<{ ok: true } | { ok: false; error: string }> {
  const q = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, slug, fuente, utm_campaign: q?.get("utm_campaign") ?? "" }),
    });
    if (res.ok) return { ok: true };
    const j = (await res.json().catch(() => ({}))) as { error?: string };
    return { ok: false, error: j.error ?? "Hubo un error. Intenta de nuevo." };
  } catch {
    return { ok: false, error: "Sin conexión. Intenta de nuevo." };
  }
}
