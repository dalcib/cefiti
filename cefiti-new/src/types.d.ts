import type { ComponentChildren } from 'preact'

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

export declare const dbVersion: number
export declare const estados: Estado[]
export declare const hospedeiros: Hospedeiro[]
export declare const legislacoes: Legislacao[]
export declare const pragas: Praga[]
export declare const rules: Rule[]
export declare const status_municipio: DB_StatusMunicipio[]

/**
 * --- Legislation Content (legislacao.js) ---
 */
export interface LegislacaoText {
  id: string
  texto: string
}

export declare const leg_texto: LegislacaoText[]

/**
 * --- Preact JSX Augmentation ---
 */
declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'md-block': {
        children?: ComponentChildren
        class?: string
        style?: string | Record<string, string | number>
      }
    }
  }
}
