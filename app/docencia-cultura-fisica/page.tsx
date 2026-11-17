import type { Metadata } from "next"
import LandingServer from "@/components/LandingServer"

export const metadata: Metadata = {
  title: "Licenciatura en Docencia en Cultura Física y Entrenamiento Deportivo | UDS",
  description: "Estudia Docencia en Cultura Física y Entrenamiento Deportivo en línea sin dejar de trabajar · 4 años · RVOE SEP. Beca del 50%. Título con validez nacional.",
  keywords: ["docencia en cultura física en línea", "licenciatura entrenamiento deportivo virtual", "educación física online México"],
  openGraph: {
    title: "Licenciatura en Docencia en Cultura Física y Entrenamiento Deportivo | UDS",
    description: "Estudia Docencia en Cultura Física y Entrenamiento Deportivo en línea sin dejar de trabajar · 4 años · RVOE SEP. Beca del 50%. Título con validez nacional.",
    url: "https://demo.aulaconsultoria.mx/docencia-cultura-fisica-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Docencia en Cultura Física y Entrenamiento Deportivo | UDS",
    description: "Estudia Docencia en Cultura Física en línea sin dejar de trabajar. RVOE SEP. Beca del 50%. Título con validez nacional.",
  },
}

export const revalidate = 300

export default function DocenciaCulturaFisicaPage() {
  return <LandingServer slug="docencia-cultura-fisica" />
}
