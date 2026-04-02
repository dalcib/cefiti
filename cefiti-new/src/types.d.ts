import 'preact'

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
  municipios: Record<string, string>
}

export interface DB_PragaStatusAction {
  status_fitossanitário: DB_StatusFitossanitario
  estados: DB_PragaEstadoStatus[]
}

export interface DB_StatusMunicipio {
  praga: string
  status: DB_PragaStatusAction[]
}

export const dbVersion: number
export const estados: Estado[]
export const hospedeiros: Hospedeiro[]
export const legislacoes: Legislacao[]
export const pragas: Praga[]
export const rules: Rule[]
export const status_municipio: DB_StatusMunicipio[]

/**
 * --- Legislation Content (legislacao.js) ---
 */
export interface LegislacaoText {
  id: string
  texto: string
}

export const leg_texto: LegislacaoText[]

/**
 * --- Preact JSX Augmentation ---
 */
declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'md-block': { children?: any; class?: string; style?: any }
    }
  }
}
