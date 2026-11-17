import { NextResponse } from "next/server";
import { crearOportunidad, registrarProspecto } from "@/lib/ghl";
import { landings } from "@/data/landings";

// Normaliza a formato internacional MX (+52 + 10 dígitos)
const telefonoMX = (t: string) => {
  const d = t.replace(/\D/g, "").replace(/^521?/, "");
  return d.length === 10 ? `+52${d}` : null;
};

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
  }

  // Campo trampa contra bots: si viene lleno, se responde ok sin registrar
  if (typeof body.empresa === "string" && body.empresa) return NextResponse.json({ ok: true });

  const slug = String(body.slug ?? "");
  const landing = landings[slug];
  const nombre = String(body.nombre ?? "").trim();
  const email = String(body.email ?? "").trim();
  const telefono = telefonoMX(String(body.telefono ?? ""));

  if (!landing) return NextResponse.json({ error: "Programa no encontrado" }, { status: 400 });
  if (nombre.length < 3 || !/^\S+@\S+\.\S+$/.test(email) || !telefono) {
    return NextResponse.json({ error: "Revisa tu nombre, correo y WhatsApp (10 dígitos)." }, { status: 422 });
  }

  const crm = landing.crm;
  const fuente = String(body.fuente ?? "formulario");
  const utm = String(body.utm_campaign ?? "").slice(0, 60);

  const tags = [
    "uds-landing",
    `uds-programa-${crm.programa}`,
    `uds-campus-${crm.campus}`,
    `uds-turno-${crm.turno}`,
    `uds-fuente-${fuente}`,
    ...(utm ? [`uds-campana-${utm.toLowerCase().replace(/[^a-z0-9-]+/g, "-")}`] : []),
  ];

  const origen = `Landing UDS · ${landing.formulario.programa}`;
  const r = await registrarProspecto({ nombre, email, telefono, tags, fuente: origen });
  if (!r.ok) {
    console.error("[lead] CRM respondió", r.status);
    return NextResponse.json({ error: "No pudimos registrar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp." }, { status: 502 });
  }

  // Oportunidad en el embudo de Admisiones. Si falla, el contacto ya quedó registrado.
  const oportunidad = r.contactId
    ? await crearOportunidad(r.contactId, `${nombre} · ${crm.nombreCRM} (${crm.campus}, ${crm.turno})`, origen)
    : false;

  return NextResponse.json({ ok: true, oportunidad });
}
