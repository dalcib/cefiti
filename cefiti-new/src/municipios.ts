import { type Estado, estados } from '#db-next'
import { municipiosBrutos } from '#municipios'

export interface Municipio {
  id: string
  nome: string
  uf: string
  raw: string
}

export async function loadMunicipiosData() {
  const municipios: Municipio[] = []

  if (municipiosBrutos && municipiosBrutos.length > 0) {
    const ufMap = new Map<string, string>()
    for (const e of estados as Estado[]) {
      if (e.ibge) {
        ufMap.set(String(e.ibge), e.UF)
      }
    }

    for (const l of municipiosBrutos) {
      if (l.trim().length > 6) {
        const id = l.slice(0, 6)
        const nome = l.slice(6).trim()
        const ibgePrefix = id.slice(0, 2)
        const uf = ufMap.get(ibgePrefix) || ''
        const m = { id, nome, uf, raw: l }
        municipios.push(m)
      }
    }
  }

  return { municipios }
}
