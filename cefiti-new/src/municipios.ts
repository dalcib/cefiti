import { type Estado, estados } from '#db-next'

export interface Municipio {
  id: string
  nome: string
  uf: string
}

export function normalize(s: string) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export async function loadMunicipiosData() {
  let text = ''
  if (
    typeof window !== 'undefined' &&
    window.location?.protocol.startsWith('http')
  ) {
    try {
      const response = await fetch('/municipios.txt')
      if (response.ok) {
        text = await response.text()
        console.log('Municipios loaded successfully via fetch')
      } else {
        console.error('Failed to load municipios via fetch:', response.status)
      }
    } catch (error) {
      console.error('Erro ao carregar municipios via fetch', error)
    }
  } else {
    try {
      const fs = await import('node:fs/promises')
      const path = await import('node:path')
      const filePath = path.join(
        process.cwd(),
        'cefiti-new/public/municipios.txt',
      )
      text = await fs.readFile(filePath, 'utf-8')
    } catch {
      // Silently fail in tests if file not found, or log if needed
    }
  }

  const municipios: Municipio[] = []
  const municipioLookup: Record<string, string> = {}

  if (text) {
    const ufMap = new Map<string, string>()
    for (const e of (estados as Estado[])) {
      if (e.ibge) {
        ufMap.set(String(e.ibge), e.UF)
      }
    }

    const lines = text.split('\n')
    for (const l of lines) {
      if (l.trim().length > 6) {
        const id = l.slice(0, 6)
        const nome = l.slice(6).trim()
        const ibgePrefix = id.slice(0, 2)
        const uf = ufMap.get(ibgePrefix) || ''
        const m = { id, nome, uf }
        municipios.push(m)
        municipioLookup[`${normalize(m.nome)}|${m.uf}`] = m.id
      }
    }
  }

  return { municipios, municipioLookup }
}

export function getMunicipioId(
  nomeOrId: string,
  uf: string,
  municipioLookup: Record<string, string>,
): string {
  if (!uf) return ''
  if (!nomeOrId) return `${uf}9999`

  // If it looks like a 6-digit IBGE code already, use it
  if (/^\d{6}$/.test(nomeOrId)) return nomeOrId

  // Accent-insensitive and case-insensitive matching
  const target = normalize(nomeOrId)

  const id = municipioLookup[`${target}|${uf}`] || `${uf}9999`

  if (
    !id.endsWith('9999') === false &&
    nomeOrId &&
    !['todos', 'qualquer'].includes(target)
  ) {
    console.warn(
      `Município não encontrado: "${nomeOrId}" em ${uf}. Usando fallback ${id}`,
    )
  }

  return id
}
