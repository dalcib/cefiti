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


Table legislacoes {
  id String [pk]
  leg String 
  data String
}

Table leg_texto {
  id Int [pk] [Ref: - legislacoes.id]
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
  prag String [pk, Ref: > pragas.prag]  
  desc String
  part String[]
  status_origem status[]
  status_destino status[] 
  exig String[]
  leg String
}

enum status { 
 "Área de SMR",
 "Área Com Ocorrência",
 "Área Livre de Praga",
 "Área Sem Registro",
 "UF Sem Registro",
 "Zona Tampão",
 "Área de Status Desconhecido",
 "Área Sob Erradicação",
 "Todas as Áreas"
} [note: "Reference to configuracoes.catalogos.status_fitossanitario"]

/*
### Regras (`rules`)

Defines the requirements for moving products between states based on pest status.

| Field | Type | Description |
| :--- | :--- | :--- |
| `prag` | `string` | Scientific name of the pest. |
| `desc` | `string` | Human-readable description of the rule. |
| `status_origem` | `string[]` | List of phytosanitary statuses at the origin. |
| `status_destino` | `string[]` | List of phytosanitary statuses at the destination. |
| `part` | `string[]` | Plant parts affected (e.g., "frutos", "mudas"). |
| `exig` | `string[]` | List of requirements/restrictions. |
| `leg` | `string` | Legal reference (citation). |

### Status Fitossanitário

Common values for `status_origem` and `status_destino`:
- `Área Com Ocorrência`
- `Área Livre de Praga`
- `Área Sem Registro`
- `UF Sem Registro`
- `Zona Tampão`
- `Área de SMR`
- `Área de Status Desconhecido`
- `Área Sob Erradicação`
- `Todas as Áreas`
*/