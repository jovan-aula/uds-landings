import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { docenciaCulturaFisicaData } from "@/data/docencia-cultura-fisica"

export const metadata: Metadata = {
  title: "Licenciatura en Docencia en Cultura Física y Entrenamiento Deportivo | UDS",
  description: "Estudia Docencia en Cultura Física 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
  keywords: ["docencia en cultura física en línea", "licenciatura entrenamiento deportivo virtual", "educación física online México"],
  openGraph: {
    title: "Licenciatura en Docencia en Cultura Física y Entrenamiento Deportivo | UDS",
    description: "Estudia Docencia en Cultura Física 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
    url: "https://demo.aulaconsultoria.mx/docencia-cultura-fisica-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Docencia en Cultura Física y Entrenamiento Deportivo | UDS",
    description: "Estudia Docencia en Cultura Física 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
  },
}

export default function DocenciaCulturaFisicaPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_DOCENCIA_CULTURA_FISICA ?? ""
  return <LandingPage data={docenciaCulturaFisicaData} webhookUrl={webhookUrl} />
}
