"use client";

import { MotionConfig } from "framer-motion";
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
  slug: string
}

export default function LandingPage({ data, slug }: Props) {
  return (
    <MotionConfig reducedMotion="user">
      <UrgencyBanner fechaCierre={data.urgency.fechaCierre} />
      <Navbar />
      <main>
        <Hero data={data.hero} />
        <ParaQuien data={data.paraQuien} />
        <PlanEstudios data={data.planEstudios} />
        <Beneficios data={data.beneficios} />
        <Testimonios data={data.testimonios} />
        <FormularioGHL data={data.formulario} slug={slug} />
      </main>
      <Footer />
      <WhatsAppButton number={data.whatsapp.number} mensaje={data.whatsapp.mensaje} />
      <StickyMobileCTA />
      <PopupBeca data={data.popup} slug={slug} />
    </MotionConfig>
  );
}
