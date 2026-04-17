/**
 * --- Common Database Interfaces ---
 */
export interface Estado {
  ibge: number
  UF: string
  estado: string
}

export interface Hospedeiro {
  id: number
  nomeSci: string
  nomeVul: string[]
}

export interface Municipio {
  id: string
  nome: string
  uf: string
  raw: string
}

export interface Legislacao {
  id: string
  leg: string
  data: string
}

export interface Praga {
  id: number
  prag: string
  pragc: string
  hosp: number[]
  files: string[]
}

export type DB_StatusFitossanitario =
  | 'Área Com Ocorrência'
  | 'Área Livre de Praga'
  | 'Área Sem Registro'
  | 'Área Sem Registro de UF Com Ocorrência'
  | 'UF Sem Registro'
  | 'Zona Tampão'
  | 'Área de SMR'
  | 'Área de Status Desconhecido'
  | 'Área Sob Erradicação'
  | 'Todas as Áreas'

export interface Rule {
  prag: string
  desc: string
  status_origem: DB_StatusFitossanitario[]
  status_destino: DB_StatusFitossanitario[]
  part: string[]
  exig: string[]
  leg: string
}

export interface DB_PragaEstadoStatus {
  uf: string
  ibge?: number
  id?: number
  municipios: number[]
}

export interface DB_PragaStatusAction {
  status_fitossanitário: DB_StatusFitossanitario
  estados: DB_PragaEstadoStatus[]
}

export interface DB_StatusMunicipio {
  praga: string
  status: DB_PragaStatusAction[]
}

export declare const dbVersion: number
export declare const estados: Estado[]
export declare const hospedeiros: Hospedeiro[]
export declare const legislacoes: Legislacao[]
export declare const pragas: Praga[]
export declare const rules: Rule[]
export declare const status_municipio: DB_StatusMunicipio[]
export declare const municipiosBrutos: string[]

/**
 * --- Legislation Content (legislacao.js) ---
 */
export interface LegislacaoText {
  id: string
  texto: string
}

export declare const leg_texto: LegislacaoText[]

/**
 * --- Application State & UI Interfaces ---
 */

export interface Dados {
  hospSci: string
  hospVul: string
  hospId: number
  prod: string
  orig: string
  dest: string
  municipioOrigem: string
  municipioOrigemId: string
  municipioDestino: string
  municipioDestinoId: string
}

export type AppView = 'home' | 'result' | 'base' | 'status'

export interface PestStatusMunicipio {
  uf: string
  ibge: number
  municipios: number[]
}

export interface PestStatusQueryResult {
  status_fitossanitário: DB_StatusFitossanitario
  estados: PestStatusMunicipio[]
}

export interface PestStatusEntry {
  praga: string
  status: PestStatusQueryResult[]
}

export interface RuleResult
  extends Omit<Rule, 'status_origem' | 'status_destino'> {
  status_origem: DB_StatusFitossanitario[]
  status_destino: DB_StatusFitossanitario[]
  orig: DB_StatusFitossanitario[]
  dest: DB_StatusFitossanitario[]
}

export interface PestSearchResult extends Omit<Praga, 'prag' | 'files'> {
  prag: string
  files: Legislacao[]
  rules: RuleResult[]
}

/**
 * --- Global Augmentations ---
 */
declare global {
  interface Window {
    gtag(
      event: string,
      action_name: string,
      params: {
        hospSci: string
        prod: string
        orig: string
        dest: string
        pragas: Record<string, string>
      },
    ): void
  }
}

/**
 * --- Preact JSX Augmentation ---
 */
declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {}
  }
}
