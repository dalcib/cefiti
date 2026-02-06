Table configuracoes {
  id Int [pk]
  version Int
  lastUpdate DateTime
}

Table pragas {
  id Int [pk, increment]
  prag String [unique]
  pragc String [unique]
  hosp Int[] [ref: < hospedeiros.id, note: "each element is a hospedeiro id"]
  files Int[] [ref: < files.id, note: "each element is a file id"]
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
  idprag Int [Ref: > pragas.id]
  part String[]
  prag String
  }

Table legislacoes {
  id Int [pk, increment]
  leg String [unique]
  link String[unique]
  file Int [Ref: - files.id]
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
  id Int [pk]
  praga Int [Ref: > pragas.id]
  estado Object{uf: Int(6)[]} [Ref: > estados.uf, note: "uf: id do estado, [] : lista de municipios"]
  status String [Ref: > status_fitossanitario.status]
}

Table rules {
  id Int [pk]
  praga Int [Ref: > pragas.id]
  status_origem status 
  status_destino status 
  exig String
}

Table status_fitossanitario {
  status String [unique] 
}

enum status {
  "A" //Ausente
  "P" //Presente
  "E" //Ausente com restrição
}