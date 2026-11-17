import type { Metadata } from "next";
import Image from "next/image";
import { landings } from "@/data/landings";
import { buscarEmbudo, listarValoresCRM } from "@/lib/ghl";
import { sesionValida } from "@/lib/portal-auth";
import { entrar, guardar, salir } from "./actions";

export const metadata: Metadata = { title: "Portal de landings · UDS", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

// Todas las landings publicadas, agrupadas por campus para el selector
const HABILITADOS = Object.keys(landings);
const CAMPUS: Record<string, string> = {
  negocios: "Negocios, Innovación y Gestión",
  "derecho-seguridad": "Derecho, Seguridad y Sociedad",
  "educacion-tecnologia": "Educación, Creatividad y Tecnología",
  car: "Centro de Alto Rendimiento (CAR)",
};

const ERRORES: Record<string, string> = {
  acceso: "Contraseña incorrecta.",
  beca: "La beca debe ser un número entre 0 y 100.",
  whatsapp: "El WhatsApp debe tener 10 dígitos.",
  crm: "No se pudo guardar en el CRM. Intenta de nuevo en un momento.",
  programa: "Programa no encontrado.",
};

const NAVY = "#173257", AZUL = "#26529C", VERDE = "#A2C049";
const input = "w-full border border-[#dfe6f1] bg-[#F6F8FB] rounded-lg px-4 py-3 text-[15px] text-[#222B3A] focus:outline-none focus:border-[#26529C]";

export default async function Portal({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const sp = await searchParams;
  const slug = HABILITADOS.includes(sp.p ?? "") ? sp.p! : HABILITADOS[0];
  const landing = landings[slug];
  const error = sp.e ? ERRORES[sp.e] : "";
  const auth = await sesionValida();

  const Cabecera = (
    <header style={{ background: NAVY }} className="px-6 py-5 flex items-center justify-between">
      <Image src="/logo-uds-white.svg" alt="UDS" width={92} height={36} />
      <span className="text-white/60 text-xs font-semibold uppercase tracking-[0.18em]">Portal de landings</span>
    </header>
  );

  if (!auth) {
    return (
      <div className="min-h-screen bg-[#EAF1FB]">
        {Cabecera}
        <main className="max-w-sm mx-auto px-6 py-16">
          <h1 className="text-2xl font-black" style={{ color: NAVY }}>Entrar</h1>
          <p className="text-sm text-[#222B3A]/70 mt-1 mb-6">Acceso para Admisiones UDS.</p>
          <form action={entrar} className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
            <input type="hidden" name="p" value={slug} />
            <label className="block text-xs font-semibold mb-1.5" style={{ color: NAVY }} htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" required autoComplete="current-password" className={input} />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button className="w-full text-white font-bold py-3.5 rounded-full" style={{ background: AZUL }}>Entrar →</button>
          </form>
        </main>
      </div>
    );
  }

  const [valoresCRM, embudo] = await Promise.all([listarValoresCRM(), buscarEmbudo()]);
  const valores = valoresCRM ?? [];
  const v = (n: string) => valores.find(x => x.name.trim() === n)?.value ?? "";
  const pre = `UDS · ${landing.crm.nombreCRM} · `;
  const actual = {
    cierre: v(`${pre}Cierre de inscripciones`),
    beca: (v(`${pre}Beca`) || landing.hero.becaPorcentaje).replace(/\D/g, ""),
    precio: v(`${pre}Colegiatura desde`) || landing.popup.precioDesde,
    whatsapp: (v("UDS · WhatsApp general") || landing.whatsapp.number).replace(/^52/, ""),
  };

  const campos = [
    { name: "cierre",   label: "Cierre de inscripciones", ayuda: "Ej. 15 de enero. Vacío = «Inscripciones abiertas».", value: actual.cierre, ph: "15 de enero" },
    { name: "beca",     label: "Beca (%)",                ayuda: "Solo el número.",                                   value: actual.beca,   ph: "50", type: "number" },
    { name: "precio",   label: "Colegiatura desde",       ayuda: "Tal como debe aparecer en la landing.",            value: actual.precio, ph: "$1,250 al mes" },
    { name: "whatsapp", label: "WhatsApp general",        ayuda: "10 dígitos. Aplica a todas las landings.",         value: actual.whatsapp, ph: "963 120 7866", type: "tel" },
  ];

  return (
    <div className="min-h-screen bg-[#EAF1FB]">
      {Cabecera}
      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-[260px_1fr] gap-10">
      <nav aria-label="Landings" className="md:pt-1">
        {Object.entries(CAMPUS).map(([clave, nombre]) => {
          const items = HABILITADOS.filter(k => landings[k].crm.campus === clave);
          if (!items.length) return null;
          return (
            <div key={clave} className="mb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#222B3A]/45 mb-2">{nombre}</p>
              {items.map(k => (
                <a key={k} href={`/portal?p=${k}`} aria-current={k === slug ? "page" : undefined}
                  className={`block py-1.5 text-sm border-l-2 pl-3 ${k === slug ? "font-bold" : "text-[#222B3A]/75 border-transparent hover:text-[#173257]"}`}
                  style={k === slug ? { color: NAVY, borderColor: VERDE } : undefined}>
                  {landings[k].crm.nombreCRM}
                </a>
              ))}
            </div>
          );
        })}
      </nav>
      <main>
        <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: VERDE }}>Editando</p>
        <h1 className="text-3xl font-black mt-1" style={{ color: NAVY }}>{landing.formulario.programa}</h1>
        <p className="text-sm text-[#222B3A]/70 mt-2">
          Los cambios se guardan en el CRM y se ven en la landing al recargarla.{" "}
          <a href={`/${slug}`} target="_blank" className="font-semibold underline" style={{ color: AZUL }}>Ver landing ↗</a>
        </p>

        {sp.ok && <p className="mt-6 text-sm font-semibold" style={{ color: NAVY }}>✓ Cambios guardados.</p>}
        {error && <p className="mt-6 text-sm text-red-600">{error}</p>}

        <form action={guardar} className="mt-6 bg-white rounded-2xl p-7 shadow-sm space-y-5">
          <input type="hidden" name="p" value={slug} />
          {campos.map(c => (
            <div key={c.name}>
              <label htmlFor={c.name} className="block text-sm font-bold mb-1.5" style={{ color: NAVY }}>{c.label}</label>
              <input id={c.name} name={c.name} defaultValue={c.value} placeholder={c.ph} type={c.type ?? "text"} min={c.type === "number" ? 0 : undefined} max={c.type === "number" ? 100 : undefined} className={input} />
              <p className="text-xs text-[#222B3A]/55 mt-1">{c.ayuda}</p>
            </div>
          ))}
          <button className="w-full text-white font-bold py-4 rounded-full" style={{ background: AZUL }}>Guardar cambios</button>
        </form>

        <div className="mt-6 text-xs text-[#222B3A]/60 space-y-1">
          <p>Conexión CRM: {valoresCRM ? "✓ activa" : "✗ sin acceso a Valores personalizados"}</p>
          <p>Oportunidades: {embudo ? `✓ embudo «${embudo.nombre}», etapa «${embudo.etapa}»` : "✗ sin acceso a embudos (falta permiso o no hay embudo)"}</p>
        </div>

        <form action={salir} className="mt-6 text-center">
          <button className="text-xs text-[#222B3A]/50 underline">Cerrar sesión</button>
        </form>
      </main>
      </div>
    </div>
  );
}
