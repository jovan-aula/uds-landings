import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import UrgencyBanner from "@/components/UrgencyBanner";
import Hero from "@/components/Hero";
import ParaQuien from "@/components/ParaQuien";
import PlanEstudios from "@/components/PlanEstudios";
import Beneficios from "@/components/Beneficios";
import Testimonios from "@/components/Testimonios";
import FormularioGHL from "@/components/FormularioGHL";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PopupBeca from "@/components/PopupBeca";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Licenciatura en Derecho en Línea | UDS Mi Universidad",
  description:
    "Estudia Derecho 100% en línea en 3 años. Título y cédula profesional con validez oficial en todo México. Sin dejar de trabajar. Inscripciones abiertas.",
  keywords: [
    "licenciatura en derecho en línea",
    "estudiar derecho en línea México",
    "carrera de derecho virtual",
    "derecho online título válido",
    "licenciatura en derecho modalidad virtual",
  ],
  openGraph: {
    title: "Licenciatura en Derecho en Línea | UDS Mi Universidad",
    description:
      "Estudia Derecho 100% en línea en 3 años. Título y cédula con validez oficial en todo México. Sin dejar de trabajar.",
    url: "https://demo.aulaconsultoria.mx/derecho-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Derecho en Línea | UDS Mi Universidad",
    description:
      "Estudia Derecho 100% en línea en 3 años. Título y cédula con validez oficial en todo México.",
  },
};

export default function DerechoPage() {
  return (
    <>
      <UrgencyBanner />
      <Navbar />
      <main>
        <Hero />
        <ParaQuien />
        <PlanEstudios />
        <Beneficios />
        <Testimonios />
        <FormularioGHL />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
      <PopupBeca />
    </>
  );
}
