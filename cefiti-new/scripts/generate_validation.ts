import {
  pragas,
  rules,
  estados,
  hospedeiros,
  status_municipio,
} from '../public/db-next.js'
import { municipiosBrutos } from '../public/municipios.js'

// --- Utility: Parse Municipios ---
function loadMunicipios() {
  const municipios = []
  const ufMap = new Map()
  for (const e of estados) {
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
      municipios.push({ id, nome, uf })
    }
  }
  return municipios
}

const allMunicipios = loadMunicipios()

// --- Logic: resolveStatus (Simplified from StoreDb) ---
function resolveStatus(pragaName, municipioId) {
  if (!municipioId || municipioId.length !== 6) return []

  const stateCodeNum = Number(municipioId.slice(0, 2))
  const muniPartNum = Number(municipioId.slice(2, 6))
  const mIdNum = Number(municipioId)

  const pestEntry = status_municipio.find((entry) => entry.praga === pragaName)
  if (!pestEntry) return ['Área Sem Registro']

  const results = []
  for (const statusObj of pestEntry.status) {
    const statusTitle = statusObj.status_fitossanitário
    const stateMatch = statusObj.estados.find(
      (e) => e.ibge === stateCodeNum || e.id === stateCodeNum,
    )

    if (stateMatch) {
      const municipios = stateMatch.municipios
      const isTodos = municipios.includes(9999)

      if (
        isTodos ||
        municipios.includes(muniPartNum) ||
        municipios.includes(mIdNum)
      ) {
        results.push(statusTitle)
      }
    }
  }

  return results.length === 0 ? ['Área Sem Registro'] : results
}

// --- Logic: Search Result (Simplified from StoreDb) ---
function getResult(hospSci, part, origId, destId) {
  const matchingRules = rules.filter((rule) => {
    // Check host species
    const praga = pragas.find((p) => p.prag === rule.prag)
    if (!praga) return false

    // Check statuses
    const statusOrig = resolveStatus(rule.prag, origId)
    const statusDest = resolveStatus(rule.prag, destId)

    const matchesOrig =
      rule.status_origem.includes('Todas as Áreas') ||
      statusOrig.some((s) => rule.status_origem.includes(s))
    const matchesDest =
      rule.status_destino.includes('Todas as Áreas') ||
      statusDest.some((s) => rule.status_destino.includes(s))

    return (
      rule.part.includes(part) &&
      matchesOrig &&
      matchesDest &&
      isHostMatch(praga.hosp, hospSci)
    )
  })

  return matchingRules
}

const hospedeiroSciMap = new Map(hospedeiros.map((h) => [h.id, h.nomeSci]))

function isHostMatch(pestHostIds, selectedNomeSci) {
  if (!pestHostIds || pestHostIds.length === 0) return true
  const selectedGenus = selectedNomeSci.split(' ')[0]
  return pestHostIds.some((id) => {
    const pestHostName = hospedeiroSciMap.get(id)
    if (!pestHostName) return false
    const pestGenus = pestHostName.split(' ')[0]
    return (
      pestHostName === selectedNomeSci ||
      ((pestHostName.endsWith(' sp.') || pestHostName.endsWith(' spp.')) &&
        pestGenus === selectedGenus)
    )
  })
}

// --- Target Pests ---
const targetPests = [
  'Bactrocera carambolae',
  'Candidatus liberibacter americanus e Candidatus liberibacter asiaticus',
  'Neonectria ditissima (Neonectria galligena)',
  'Ralstonia solanacearum raça 2',
  'Rhizoctonia theobromae (Ceratobasidium theobromae)',
  'Schizotetranychus hindustanicus',
  'Sternochetus mangiferae',
  'Xanthomonas campestris pv. viticola',
  'Xanthomonas citri subsp. citri',
]

// --- Uniform State Finder ---
function getUniformStates(pragaName) {
  const pestEntry = status_municipio.find((entry) => entry.praga === pragaName)
  if (!pestEntry) return []

  const uniformUFs = []
  for (const statusObj of pestEntry.status) {
    const status = statusObj.status_fitossanitário
    for (const e of statusObj.estados) {
      if (e.municipios.includes(9999)) {
        const estado = estados.find(
          (est) => est.ibge === e.ibge || est.id === e.ibge,
        )
        if (estado) {
          uniformUFs.push({ uf: estado.UF, status })
        }
      }
    }
  }
  return uniformUFs
}

// --- Generation ---
const samples = []
const targetCount = 100

for (let i = 0; i < targetCount; i++) {
  const pragaName = targetPests[i % targetPests.length]
  const pragaData = pragas.find((p) => p.prag === pragaName)
  const hostId =
    pragaData.hosp[Math.floor(Math.random() * pragaData.hosp.length)]
  const hospSci = hospedeiroSciMap.get(hostId)

  // Find valid parts (products) for this pest in rules
  const pestRules = rules.filter((r) => r.prag === pragaName)
  const allParts = Array.from(new Set(pestRules.flatMap((r) => r.part)))
  const part = allParts[Math.floor(Math.random() * allParts.length)] || 'frutos'

  // Origin
  const uniformOrigs = getUniformStates(pragaName)
  let origMuni: (typeof allMunicipios)[0]
  if (uniformOrigs.length > 0 && Math.random() > 0.2) {
    const pick = uniformOrigs[Math.floor(Math.random() * uniformOrigs.length)]
    const candidates = allMunicipios.filter((m) => m.uf === pick.uf)
    origMuni = candidates[Math.floor(Math.random() * candidates.length)]
  } else {
    origMuni = allMunicipios[Math.floor(Math.random() * allMunicipios.length)]
  }

  // Destination
  let destMuni: (typeof allMunicipios)[0]
  const uniformDests = uniformOrigs // Same set
  if (uniformDests.length > 0 && Math.random() > 0.3) {
    const pick = uniformDests[Math.floor(Math.random() * uniformDests.length)]
    const candidates = allMunicipios.filter((m) => m.uf === pick.uf)
    destMuni = candidates[Math.floor(Math.random() * candidates.length)]
  } else {
    destMuni = allMunicipios[Math.floor(Math.random() * allMunicipios.length)]
  }

  const statusOrig = resolveStatus(pragaName, origMuni.id).join(', ')
  const statusDest = resolveStatus(pragaName, destMuni.id).join(', ')
  const resultRules = getResult(hospSci, part, origMuni.id, destMuni.id).filter(
    (r) => r.prag === pragaName,
  )

  const resultText =
    resultRules.length > 0
      ? resultRules
          .map((r, idx) => `**Exigência ${idx + 1}:** ${r.exig.join(' ')}`)
          .join('<br><br>')
      : '*Sem exigências específicas para esta praga*'

  samples.push({
    id: i + 1,
    praga: pragaName,
    host: hospSci,
    part,
    orig: `${origMuni.nome} (${origMuni.uf}) [${statusOrig}]`,
    dest: `${destMuni.nome} (${destMuni.uf}) [${statusDest}]`,
    result: resultText,
  })
}

import fs from 'node:fs'

// --- Output Table ---
let outputTable =
  '| ID | Praga | Hospedeiro | Produto | Origem [Status] | Destino [Status] | Resultado (Exigências) |\n'
outputTable += '|---:|:---|:---|:---|:---|:---|:---|\n'
for (const s of samples) {
  outputTable += `| ${s.id} | ${s.praga} | ${s.host} | ${s.part} | ${s.orig} | ${s.dest} | ${s.result} |\n`
}

fs.writeFileSync('tabela_validação.md', outputTable, 'utf8')
console.log('Tabela de validação gerada com sucesso em tabela_validação.md')
