"use client";

import type { LandingData } from "@/types/landing";
import UrgencyBanner from "@/components/UrgencyBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParaQuien from "@/components/ParaQuien";
import PlanEstudios from "@/components/PlanEstudios";
import Beneficios from "@/components/Beneficios";
import Testimonios from "@/components/Testimonios";
import FormularioGHL from "@/components/FormularioGHL";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import PopupBeca from "@/components/PopupBeca";

interface Props {
  data: LandingData
  webhookUrl: string
}

export default function LandingPage({ data, webhookUrl }: Props) {
  return (
    <>
      <UrgencyBanner fechaCierre={data.urgency.fechaCierre} />
      <Navbar />
      <main>
        <Hero data={data.hero} />
        <ParaQuien data={data.paraQuien} />
        <PlanEstudios data={data.planEstudios} />
        <Beneficios data={data.beneficios} />
        <Testimonios data={data.testimonios} />
        <FormularioGHL data={data.formulario} webhookUrl={webhookUrl} />
      </main>
      <Footer />
      <WhatsAppButton number={data.whatsapp.number} mensaje={data.whatsapp.mensaje} />
      <StickyMobileCTA />
      <PopupBeca data={data.popup} webhookUrl={webhookUrl} />
    </>
  );
}
