import type { Metadata } from "next"
import LandingServer from "@/components/LandingServer"

export const metadata: Metadata = {
  title: "Maestría en Educación Basada en Competencias Digitales | UDS Mi Universidad",
  description: "Maestría en Educación Basada en Competencias Digitales en línea sin dejar de trabajar · 2 años · RVOE Federal SEP. Beca del 50%. Cédula con validez nacional.",
  keywords: ["maestría en competencias digitales", "educación digital en línea", "tecnología educativa online México"],
  openGraph: {
    title: "Maestría en Educación Basada en Competencias Digitales | UDS Mi Universidad",
    description: "Maestría en Educación Basada en Competencias Digitales en línea sin dejar de trabajar · 2 años · RVOE Federal SEP. Beca del 50%. Cédula con validez nacional.",
    url: "https://demo.aulaconsultoria.mx/competencias-digitales-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maestría en Educación Basada en Competencias Digitales | UDS Mi Universidad",
    description: "Maestría en Competencias Digitales en línea sin dejar de trabajar. RVOE Federal SEP. Beca del 50%. Cédula con validez nacional.",
  },
}

export const revalidate = 300

export default function CompetenciasDigitalesPage() {
  return <LandingServer slug="competencias-digitales" />
}
