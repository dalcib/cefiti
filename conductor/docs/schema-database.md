Table configuracoes {
  id Int [pk]
  version Int
  lastUpdate DateTime
  catalogos Json [note: "Contains consolidated lists like status_fitossanitario"]
}

Table pragas {
  prag String [pk, unique]
  pragc String [unique]
  hosp Int[] [ref: < hospedeiros.id, note: "each element is a hospedeiro id"]
  files String[] [ref: < legislacoes.id, note: "each element is a legislacao id"]
}

Table hospedeiros {
  id Int [pk, increment]
  nomeSci String [unique]
  nomeVul String[]
}

Table regras {
  id Int [pk, increment]
  desc String
  dest String[] [Ref: > estados.uf, note: "each element is a estado uf"]
  orig String[] [Ref: > estados.uf, note: "each element is a estado uf"]
  part String[]
  prag String [Ref: > pragas.prag]
  }

Table legislacoes {
  id String [pk]
  leg String [unique]
  data String
}

Table files {
  id Int [pk, increment] [Ref: - legislacoes.file]
  text String
}

Table archive {
  id Int [pk, increment]
  version Int
  timestamp DateTime [default: "now()"]
  data Json
}

Table estados {
  id Int [pk]
  uf String [unique]
  nome String [unique]
}

Table municipios {
  id Int(6) [pk]
  nome String [unique]
  estado String [Ref: > estados.uf]
}

Table status_municipio {
  praga String [pk, Ref: = pragas.prag]
  status StatusItem[] [note: "Lista de status fitossanitários aplicáveis"]
}

Table StatusItem {
  status_fitossanitário status 
  estados EstadoItem[]
}

Table EstadoItem {
  uf String [Ref: > estados.uf]
  ibge Int(2) [note: "Código IBGE do estado (ex: 33 para RJ)"]
  municipios Map<IBGE_Suffix(4), Name> [note: "Mapeamento de sufixos IBGE (4 dígitos) para nomes de municípios. Use {'9999': 'Todos'}para abranger todo o estado."]
}

Table rules {
  id Int [pk]
  part String[]
  prag String [Ref: > pragas.prag]  
  status_origem status 
  status_destino status 
  exig String
}

enum status { 
 "Área de SMR",
 "Área Com Ocorrência",
 "Área Erradicada",
 "Área Sob Erradicação",
 "Área de Status Desconhecido",
 "Zona Tampão",
 "Área Livre de Praga (ALP)",
 "Área Sem Registro"
} [note: "Reference to configuracoes.catalogos.status_fitossanitario"]