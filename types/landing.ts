export interface TrustBadge {
  label: string
  highlight?: boolean
}

export interface HeroData {
  badge1: string
  badge2: string
  h1Line1: string
  h1Line2: string
  subtitulo: string
  subtituloStrong: string
  tagline: string
  cta1: string
  cta2: string
  imageSrc: string
  imageAlt: string
  becaPorcentaje: string
  trustBadges: TrustBadge[]
}

export interface Perfil {
  titulo: string
  descripcion: string
}

export interface ParaQuienData {
  titulo?: string
  perfiles: Perfil[]
}

export interface Cuatrimestre {
  num: number
  materias: string[]
}

export interface PlanEstudiosData {
  titulo: string
  descripcion: string
  rvoeLabel: string
  periodoLabel?: string
  cuatrimestres: Cuatrimestre[]
}

export interface BeneficioItem {
  num: string
  unidad: string
  titulo: string
  descripcion: string
}

export interface BeneficiosData {
  titulo: string
  items: BeneficioItem[]
}

export interface Testimonio {
  nombre: string
  rol: string
  cita: string
  inicial: string
  color: string
}

export interface TestimoniosData {
  items: Testimonio[]
}

export interface FormularioData {
  programa: string
  listItems: string[]
  urgenciaTexto: string
}

export interface PopupData {
  ciclo: string
  h2Line1: string
  h2Highlight: string
  precioDesde: string
  urgenciaFecha: string
  programa: string
}

export interface LandingData {
  slug: string
  meta: {
    title: string
    description: string
    keywords: string[]
    ogUrl: string
  }
  urgency: {
    fechaCierre: string
  }
  hero: HeroData
  paraQuien: ParaQuienData
  planEstudios: PlanEstudiosData
  beneficios: BeneficiosData
  testimonios: TestimoniosData
  formulario: FormularioData
  popup: PopupData
  whatsapp: {
    number: string
    mensaje: string
  }
}
