import type { Estado } from '#db-next'
import { storeDb } from './store-db'
import { storeUi } from './store-ui'
import type { Dados, Municipio } from './types'

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

    const filterText = normalize((storeDb.dados[name] as string) || '')
    const options = (storeDb[source] as OptionType[]).filter((option) => {
      if (!filterText) return true
      let val = ''
      if (typeof option === 'string') {
        val = option
      } else if ('raw' in option) {
        // Use raw string (code + name) to allow searching by code
        val = (option as Municipio).raw
      } else if ('UF' in option) {
        val = (option as Estado).UF
      }
      const normalizedVal = normalize(val)
      const matches = normalizedVal.includes(filterText)

      // Se já temos um município selecionado e o texto no input é o nome dele,
      // não mostramos nada no datalist para que ele desapareça.
      if (typeof option !== 'string' && 'id' in option) {
        const m = option as Municipio
        if (
          storeDb.dados[`${name}Id` as keyof Dados] === m.id &&
          storeDb.dados[name as keyof Dados] === m.nome
        ) {
          return false
        }
      }

      return matches
    })

    const handleInput = (e: Event) => {
      const input = e.target as HTMLInputElement
      const val = input.value
      const match = (storeDb[source] as Municipio[]).find((m) => m.nome === val)
      if (match) {
        storeDb.updateMunicipioSelection(
          name as 'municipioOrigem' | 'municipioDestino',
          match.nome,
          match.id,
        )
        input.blur() // Force close datalist
      } else {
        // If no match, just update the name in the storeDb (user typing)
        storeDb.dados[name as 'municipioOrigem' | 'municipioDestino'] = val
        storeDb.dados[
          `${name}Id` as 'municipioOrigemId' | 'municipioDestinoId'
        ] = ''
      }
    }

    return (
      <>
        <input
          list={`list-${name}`}
          value={storeDb.dados[name]}
          name={name}
          onInput={handleInput}
          onChange={handleInput}
          placeholder="Digite para filtrar..."
          className="form-select"
          style={{ minWidth: "145px" }}
          autoComplete="off"
          disabled={
            !storeDb.dados[name === "municipioOrigem" ? "orig" : "dest"]
          }
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
      value={storeDb.dados[name]}
      name={name}
      onChange={(e: Event): void => storeDb.handleChanges(e)}
    >
      {storeDb[source].map((option) => {
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
          href={`https://www.google.com.br/search?site=imghp&tbm=isch&q=${storeDb.dados.hospSci}+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower`}
        >
          Fotos da Espécie Vegetal
        </a>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            storeDb.handleSearch(() => storeUi.navigate('result'))
          }}
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
