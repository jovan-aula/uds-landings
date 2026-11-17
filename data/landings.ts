import type { LandingData } from "@/types/landing";
import { administracionNegociosData } from "./administracion-negocios";
import { centrosHospitalariesData } from "./centros-hospitalarios";
import { cienciasDeporteData } from "./ciencias-deporte";
import { cienciasEducacionData } from "./ciencias-educacion";
import { competenciasDigitalesData } from "./competencias-digitales";
import { contabilidadData } from "./contabilidad";
import { derechoData } from "./derecho";
import { docenciaCulturaFisicaData } from "./docencia-cultura-fisica";
import { ingenieriaIndustrialData } from "./ingenieria-industrial";
import { innovacionEducativaNeuroaprendizajeData } from "./innovacion-educativa-neuroaprendizaje";
import { seguridadPublicaData } from "./seguridad-publica";

/**
 * Datos de enrutamiento al CRM por landing (Mapeo de procesos UDS, nov 2026).
 * - programa/campus/turno → etiquetas del contacto; el flujo de GHL asigna al asesor con ellas.
 * - nombreCRM → prefijo de los Valores personalizados que la UDS edita en el CRM.
 */
export type CRM = { programa: string; campus: string; turno: string; nombreCRM: string };
export type Landing = LandingData & { crm: CRM };

const conCRM = (data: LandingData, crm: CRM): Landing => ({ ...data, crm });

export const landings: Record<string, Landing> = {
  contabilidad: conCRM(contabilidadData, { programa: "contabilidad", campus: "negocios", turno: "discontinuo", nombreCRM: "Contabilidad" }),
  "administracion-negocios": conCRM(administracionNegociosData, { programa: "administracion-negocios", campus: "negocios", turno: "discontinuo", nombreCRM: "Administración y Negocios" }),
  "ingenieria-industrial": conCRM(ingenieriaIndustrialData, { programa: "ingenieria-industrial", campus: "negocios", turno: "discontinuo", nombreCRM: "Ingeniería Industrial" }),
  "centros-hospitalarios": conCRM(centrosHospitalariesData, { programa: "centros-hospitalarios", campus: "negocios", turno: "discontinuo", nombreCRM: "Centros Hospitalarios" }),
  derecho: conCRM(derechoData, { programa: "derecho", campus: "derecho-seguridad", turno: "discontinuo", nombreCRM: "Derecho" }),
  "seguridad-publica": conCRM(seguridadPublicaData, { programa: "seguridad-publica", campus: "derecho-seguridad", turno: "discontinuo", nombreCRM: "Seguridad Pública" }),
  "ciencias-educacion": conCRM(cienciasEducacionData, { programa: "ciencias-educacion", campus: "educacion-tecnologia", turno: "discontinuo", nombreCRM: "Ciencias de la Educación" }),
  "competencias-digitales": conCRM(competenciasDigitalesData, { programa: "competencias-digitales", campus: "educacion-tecnologia", turno: "discontinuo", nombreCRM: "Competencias Digitales" }),
  "innovacion-educativa-neuroaprendizaje": conCRM(innovacionEducativaNeuroaprendizajeData, { programa: "innovacion-educativa", campus: "educacion-tecnologia", turno: "discontinuo", nombreCRM: "Innovación Educativa" }),
  "ciencias-deporte": conCRM(cienciasDeporteData, { programa: "ciencias-deporte", campus: "car", turno: "matutino", nombreCRM: "Ciencias del Deporte" }),
  "docencia-cultura-fisica": conCRM(docenciaCulturaFisicaData, { programa: "docencia-cultura-fisica", campus: "car", turno: "matutino", nombreCRM: "Docencia en Cultura Física" }),
};
