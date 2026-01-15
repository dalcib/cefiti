/// <reference types="react-scripts" />

/* declare module 'detect-browser' {
  detect: () => Browser
  detectOS: any
  getNodeVersion: any
  parseUserAgent: any
}
 */

interface Dados {
  hospSci: string
  hospVul: string
  prod: string
  orig: string
  dest: string
}

interface Regra {
  idprag: number
  desc: string
  part: string[]
  orig: string[]
  dest: string[]
  prag: string
  exig: string[]
}

interface Files {
  leg: string
  link: string
}

interface Praga {
  id: number
  prag: string
  hosp: string[]
  pragc: string
  files: Files[]
}

interface Hospedeiro {
  id: number
  nomeVul: string
  nomeSci: string
  count_nameVul?: number
}

type Db = Praga & Regra

interface Estado {
  estado: string
  UF: string
}

//declare global {
interface Window {
  //ga(event?: string, search?: string, category?: string, data?: string): void
  gtag(
    event: string,
    action_name: string,
    { eventCategory: string, dimension5: string },
  )
}
//}

/* type EventChange = { currentTarget: { name: keyof Dados; value: string } } & React.ChangeEvent<
  HTMLSelectElement
> */

/* interface Dbbb {
  prag: string
  hosp: string[]
  pragc: string
  files: [
    {
      leg: string
      link: string
    }
  ]
  desc: string
  part: string[]
  orig: string[]
  dest: string[]
  exig: string[]
} */
