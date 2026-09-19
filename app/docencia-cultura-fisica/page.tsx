import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { docenciaCulturaFisicaData } from "@/data/docencia-cultura-fisica"

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

export default function DocenciaCulturaFisicaPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_DOCENCIA_CULTURA_FISICA ?? ""
  return <LandingPage data={docenciaCulturaFisicaData} webhookUrl={webhookUrl} />
}
