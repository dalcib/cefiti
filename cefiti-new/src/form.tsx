import type { Estado } from '#db-next'
import { type Dados, type Municipio, store } from './store'

interface PropsSelect {
  source:
    | 'listaNomesSci'
    | 'listaNomesVul'
    | 'partes'
    | 'estados'
    | 'municipiosOrigem'
    | 'municipiosDestino'
  name: keyof Dados
}

type OptionType = string | Municipio | Estado

const Select = function Select({ source, name }: PropsSelect) {
  if (name.startsWith('municipio')) {
    const normalize = (s: string) =>
      s
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

    const filterText = normalize((store.dados[name] as string) || '')
    const options = (store[source] as OptionType[]).filter((option) => {
      if (!filterText) return true
      let val = ''
      if (typeof option === 'string') {
        val = option
      } else if ('nome' in option) {
        val = (option as Municipio).nome
      } else if ('UF' in option) {
        val = (option as Estado).UF
      }
      return normalize(val).startsWith(filterText)
    })

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      const match = (store[source] as Municipio[]).find((m) => m.nome === val)
      if (match) {
        store.updateMunicipioSelection(
          name as 'municipioOrigem' | 'municipioDestino',
          match.nome,
          match.id,
        )
      } else {
        // If no match, just update the name in the store (user typing)
        store.dados[name as 'municipioOrigem' | 'municipioDestino'] = val
        store.dados[`${name}Id` as 'municipioOrigemId' | 'municipioDestinoId'] =
          ''
      }
    }

    return (
      <>
        <input
          list={`list-${name}`}
          value={store.dados[name]}
          name={name}
          onInput={handleInput}
          onChange={handleInput}
          placeholder="Digite para filtrar..."
          className="form-select"
          style={{ minWidth: '145px' }}
        />
        <datalist id={`list-${name}`}>
          {options.map((option) => {
            const opt = option as OptionType
            let value = ''
            let display = ''

            if (typeof opt === 'string') {
              value = opt
              display = opt
            } else if ('id' in opt) {
              const m = opt as Municipio
              value = m.nome
              display = m.nome
            } else if ('UF' in opt) {
              const s = opt as Estado
              value = s.UF
              display = s.estado
            }

            return (
              <option
                value={value}
                key={typeof opt !== 'string' && 'id' in opt ? opt.id : value}
              >
                {display}
              </option>
            )
          })}
        </datalist>
      </>
    )
  }

  return (
    <select
      style={name === 'prod' ? { minWidth: '145px' } : {}}
      id={name}
      className={name === 'hospSci' ? 'italic form-select' : 'form-select'}
      value={store.dados[name]}
      name={name}
      onChange={(e: Event): void => store.handleChanges(e)}
    >
      {store[source].map((option) => {
        const opt = option as string | Municipio | Estado
        const value =
          typeof opt === 'string' ? opt : 'nome' in opt ? opt.nome : opt.UF
        const key =
          typeof opt === 'string' ? opt : 'id' in opt ? opt.id : opt.UF
        const label =
          typeof opt === 'string' ? opt : 'nome' in opt ? opt.nome : opt.estado

        return (
          <option value={value} key={key} aria-selected="false">
            {label}
          </option>
        )
      })}
    </select>
  )
}

function Form() {
  //const store = useStore()
  if (store.searched) return <div />

  return (
    <form>
      <FormField
        label="Espécie Vegetal (nome científico):"
        name="hospSci"
        source="listaNomesSci"
      />
      <FormField
        label="Espécie Vegetal (nome vulgar):"
        name="hospVul"
        source="listaNomesVul"
      />
      <FormField label="Parte da Planta:" name="prod" source="partes" />
      <FormField label="Estado de Origem:" name="orig" source="estados" />
      <FormField
        label="Município de Origem:"
        name="municipioOrigem"
        source="municipiosOrigem"
      />
      <FormField label="Estado de Destino:" name="dest" source="estados" />
      <FormField
        label="Município de Destino:"
        name="municipioDestino"
        source="municipiosDestino"
      />
      <br />
      <div>
        <a
          style={{ marginBottom: '10px' }}
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com.br/search?site=imghp&tbm=isch&q=${store.dados.hospSci}+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower`}
        >
          Fotos da Espécie Vegetal
        </a>
        <button
          type="submit"
          onClick={(e) => store.handleSearch(e)}
          className="form-button margin-left-100"
          disabled={false}
        >
          Pesquisar
        </button>
      </div>
    </form>
  )
}

interface FormFieldProps extends PropsSelect {
  label: string
}

const FormField = function FormField({ label, name, source }: FormFieldProps) {
  return (
    <div>
      <label className="form" htmlFor={name}>
        {label}
      </label>
      <Select name={name} source={source} />
    </div>
  )
}

export default Form
