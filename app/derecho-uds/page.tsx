import type { Metadata } from "next";
import { derechoData } from "@/data/derecho";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: derechoData.meta.title,
  description: derechoData.meta.description,
  keywords: derechoData.meta.keywords,
  openGraph: {
    title: derechoData.meta.title,
    description:
      "Estudia Derecho 100% en línea en 3 años. Título y cédula con validez oficial en todo México. Sin dejar de trabajar.",
    url: derechoData.meta.ogUrl,
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: derechoData.meta.title,
    description:
      "Estudia Derecho 100% en línea en 3 años. Título y cédula con validez oficial en todo México.",
  },
};

export default function DerechoPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_DERECHO ?? "";
  return <LandingPage data={derechoData} webhookUrl={webhookUrl} />;
}
