"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { updateTag } from "next/cache";
import { landings } from "@/data/landings";
import { guardarValorCRM, listarValoresCRM } from "@/lib/ghl";
import { COOKIE, firma, passwordValida, sesionValida } from "@/lib/portal-auth";

export async function entrar(formData: FormData) {
  const intento = String(formData.get("password") ?? "");
  const p = String(formData.get("p") ?? "contabilidad");
  if (!passwordValida(intento)) redirect(`/portal?p=${p}&e=acceso`);
  (await cookies()).set(COOKIE, firma(intento), { httpOnly: true, secure: true, sameSite: "lax", path: "/portal", maxAge: 60 * 60 * 12 });
  redirect(`/portal?p=${p}`);
}

export async function salir() {
  (await cookies()).delete({ name: COOKIE, path: "/portal" });
  redirect("/portal");
}

export async function guardar(formData: FormData) {
  if (!(await sesionValida())) redirect("/portal?e=acceso");
  const slug = String(formData.get("p") ?? "");
  const landing = landings[slug];
  if (!landing) redirect("/portal?e=programa");

  const limpio = (k: string) => String(formData.get(k) ?? "").trim().slice(0, 80);
  const cierre = limpio("cierre");
  const beca = limpio("beca").replace(/[^\d]/g, "");
  const precio = limpio("precio");
  const whatsapp = limpio("whatsapp").replace(/\D/g, "").replace(/^(?!52)(\d{10})$/, "52$1");

  if (beca && (Number(beca) < 0 || Number(beca) > 100)) redirect(`/portal?p=${slug}&e=beca`);
  if (whatsapp && !/^52\d{10}$/.test(whatsapp)) redirect(`/portal?p=${slug}&e=whatsapp`);

  const existentes = await listarValoresCRM();
  if (!existentes) redirect(`/portal?p=${slug}&e=crm`);

  const pre = `UDS · ${landing.crm.nombreCRM} · `;
  const cambios: [string, string][] = [
    [`${pre}Cierre de inscripciones`, cierre],
    [`${pre}Beca`, beca ? `${beca}%` : ""],
    [`${pre}Colegiatura desde`, precio],
    ["UDS · WhatsApp general", whatsapp],
  ];
  // Un campo vacío no borra nada en el CRM: la landing usa su texto por defecto
  const resultados = await Promise.all(
    cambios.filter(([, v]) => v !== "").map(([n, v]) => guardarValorCRM(existentes, n, v)),
  );
  if (resultados.some(ok => !ok)) redirect(`/portal?p=${slug}&e=crm`);

  updateTag("valores-crm");
  redirect(`/portal?p=${slug}&ok=1`);
}
