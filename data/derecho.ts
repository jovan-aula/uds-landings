import type { LandingData } from "@/types/landing";

export const derechoData: LandingData = {
  slug: "derecho-uds",
  meta: {
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
    ogUrl: "https://demo.aulaconsultoria.mx/derecho-uds",
  },
  urgency: {
    fechaCierre: "21 de septiembre",
  },
  hero: {
    badge1: "RVOE Federal SEP · No. 20254217",
    badge2: "Licenciatura · 3 años · Virtual",
    h1Line1: "Estudia Derecho en línea",
    h1Line2: "sin dejar de trabajar.",
    subtitulo:
      "A tu ritmo, sin horarios fijos. Compatible con tu trabajo, tu familia y tu vida real.",
    subtituloStrong: "47 años formando profesionistas",
    tagline:
      "Título y cédula profesional con validez en toda la república mexicana.",
    cta1: "Hablar con un asesor",
    cta2: "Ver plan de estudios",
    imageSrc: "/estudiante-hero.png",
    imageAlt: "Estudiante UDS Derecho",
    becaPorcentaje: "50%",
    trustBadges: [
      { label: "RVOE Federal · SEP", highlight: true },
      { label: "47 años de tradición" },
      { label: "A tu ritmo, en línea" },
      { label: "Título con validez nacional" },
    ],
  },
  paraQuien: {
    perfiles: [
      {
        titulo: "Recién egresados de bachillerato",
        descripcion:
          "Que buscan una carrera con impacto social, estabilidad profesional y la flexibilidad de estudiar en línea.",
      },
      {
        titulo: "Profesionistas en activo",
        descripcion:
          "Que quieren formalizarse o cambiar de área con una carrera que se adapta a su horario de trabajo.",
      },
      {
        titulo: "Personas comprometidas con la justicia",
        descripcion:
          "Con pasión por defender derechos, interés en el bienestar social y vocación por las relaciones humanas.",
      },
    ],
  },
  planEstudios: {
    titulo: "3 años de formación integral",
    descripcion: "9 cuatrimestres · Modalidad no escolarizada",
    rvoeLabel: "Programa con RVOE Federal SEP · Registro No. 20254217",
    cuatrimestres: [
      {
        num: 1,
        materias: [
          "Introducción al estudio del derecho",
          "Historia del pensamiento jurídico social",
          "Terminología romana aplicada al Derecho",
          "Filosofía del derecho",
          "Teoría del estado",
          "Informática aplicada I",
        ],
      },
      {
        num: 2,
        materias: [
          "Teoría general del proceso I",
          "Sistemas jurídicos contemporáneos",
          "Sociología jurídica",
          "Teoría general de los derechos Humanos",
          "Derecho civil I",
          "Informática aplicada II",
        ],
      },
      {
        num: 3,
        materias: [
          "Teoría general del proceso II",
          "Derecho penal I",
          "Derecho mercantil I",
          "Derecho constitucional I",
          "Derecho civil II",
          "Comunicación asertiva",
        ],
      },
      {
        num: 4,
        materias: [
          "Teoría general del proceso III",
          "Derecho penal II",
          "Derecho mercantil II",
          "Derecho constitucional II",
          "Derecho civil III",
          "Argumentación e interpretación Jurídica",
        ],
      },
      {
        num: 5,
        materias: [
          "Derecho del trabajo I",
          "Derecho procesal penal acusatorio",
          "Derecho procesal mercantil",
          "Derecho administrativo I",
          "Derecho civil IV",
          "Técnicas de interrogatorio y contrainterrogatorio",
        ],
      },
      {
        num: 6,
        materias: [
          "Derecho del trabajo II",
          "Práctica forense I de derecho procesal Penal",
          "Derecho internacional público",
          "Derecho administrativo II",
          "Derecho procesal civil",
          "Técnicas de oralidad jurídica",
        ],
      },
      {
        num: 7,
        materias: [
          "Derecho procesal laboral",
          "Práctica forense II de derecho procesal Penal",
          "Derecho internacional privado",
          "Juicio de amparo I",
          "Práctica forense de derecho civil y mercantil",
          "Ética y deontología jurídica",
        ],
      },
      {
        num: 8,
        materias: [
          "Derecho aduanero",
          "Derecho fiscal I",
          "Seguridad pública",
          "Juicio de amparo II",
          "Derecho agrario",
          "Métodos y técnicas de investigación",
        ],
      },
      {
        num: 9,
        materias: [
          "Derecho notarial",
          "Derecho fiscal II",
          "Función jurisdiccional y carrera Judicial",
          "Práctica forense del juicio de amparo",
          "Derecho del medio ambiente",
          "Seminario de titulación y tesis",
        ],
      },
    ],
  },
  beneficios: {
    titulo: "Una carrera que vale la pena",
    items: [
      {
        num: "47",
        unidad: "años",
        titulo: "De experiencia educativa",
        descripcion:
          "Una institución con trayectoria probada formando profesionistas de alto nivel en el sureste de México.",
      },
      {
        num: "100%",
        unidad: "",
        titulo: "Virtual y flexible",
        descripcion:
          "Estudia desde donde estés. Sin desplazamientos, sin horarios rígidos, sin sacrificar tu vida.",
      },
      {
        num: "40+",
        unidad: "programas",
        titulo: "Oferta educativa amplia",
        descripcion:
          "Licenciaturas, maestrías y doctorados. Una institución que crece contigo a lo largo de tu carrera.",
      },
      {
        num: "100%",
        unidad: "válido",
        titulo: "Títulos con validez nacional",
        descripcion:
          "Cédula profesional y título con reconocimiento oficial en toda la república mexicana.",
      },
    ],
  },
  testimonios: {
    items: [
      {
        nombre: "Gabriela Torres",
        rol: "Egresada · Licenciatura en Derecho",
        cita: "Estudiar en línea me permitió combinar el trabajo con mi carrera. Hoy tengo mi cédula y ejerzo con orgullo.",
        inicial: "G",
        color: "bg-[#26529C]",
      },
      {
        nombre: "Marco Ramírez",
        rol: "Estudiante · 7° cuatrimestre",
        cita: "La atención de los asesores es excelente. Siempre tuve acompañamiento en cada duda y cada trámite.",
        inicial: "M",
        color: "bg-[#173257]",
      },
      {
        nombre: "Sofía Mendoza",
        rol: "Egresada · Licenciatura en Derecho",
        cita: "Lo mejor fue estudiar a mi ritmo sin descuidar mi trabajo. La plataforma es muy fácil de usar.",
        inicial: "S",
        color: "bg-[#A2C049]",
      },
    ],
  },
  formulario: {
    programa: "Licenciatura en Derecho",
    listItems: [
      "Sin compromiso de inscripción",
      "Te explicamos costo y cómo aplicar tu beca del 50%",
      "Proceso de admisión 100% en línea",
    ],
    urgenciaTexto: "Cerramos inscripciones el 21 de septiembre",
  },
  popup: {
    ciclo: "CICLO 2026",
    h2Line1: "Estudia Derecho con hasta",
    h2Highlight: "50% de beca",
    precioDesde: "$1,250 al mes",
    urgenciaFecha: "21 de septiembre",
    programa: "Licenciatura en Derecho",
  },
  whatsapp: {
    number: "529631207866",
    mensaje:
      "Hola, me interesa información sobre la Licenciatura en Derecho en línea de UDS.",
  },
};
