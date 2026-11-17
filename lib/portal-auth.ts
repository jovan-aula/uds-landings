import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

// Acceso al portal con una contraseña compartida (variable PORTAL_PASSWORD en Vercel).
export const COOKIE = "uds_portal";

export const firma = (password: string) =>
  createHash("sha256").update(`${password}::${process.env.GHL_LOCATION_ID ?? ""}::uds-portal`).digest("hex");

export function passwordValida(intento: string): boolean {
  const real = process.env.PORTAL_PASSWORD;
  if (!real) return false;
  const a = Buffer.from(firma(intento)), b = Buffer.from(firma(real));
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function sesionValida(): Promise<boolean> {
  const real = process.env.PORTAL_PASSWORD;
  if (!real) return false;
  const c = (await cookies()).get(COOKIE)?.value;
  return !!c && c === firma(real);
}
