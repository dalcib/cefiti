import { type Store, store } from './store'

interface PropsSelect {
  source: 'listaNomesSci' | 'listaNomesVul' | 'partes' | 'destino' | 'origem' | 'municipiosOrigem' | 'municipiosDestino'
  name: keyof Store['dados']
}

const Select = function Select({ source, name }: PropsSelect) {
  //const store = useStore()

  if (name.startsWith('municipio')) {
    const normalize = (s: string) =>
      s
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

    const filterText = normalize(store.dados[name] || '')
    const options = store[source].filter((option) => {
      if (!filterText) return true
      const val =
        typeof option === 'string'
          ? option
          : (option as any).nome || (option as any).UF
      return normalize(val).includes(filterText)
    })

    return (
      <>
        <input
          list={`list-${name}`}
          value={store.dados[name]}
          name={name}
          onChange={(e) => store.handleChanges(e as any)}
          placeholder="Digite para filtrar..."
          className="form-select"
          style={{ minWidth: '145px' }}
        />
        <datalist id={`list-${name}`}>
          {options.map((option) => (
            <option
              value={
                typeof option === 'string'
                  ? option.toString()
                  : (option as any).nome || (option as any).UF
              }
              key={
                typeof option === 'string'
                  ? option.toString()
                  : (option as any).id || (option as any).UF
              }
            />
          ))}
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
      onChange={(e) => store.handleChanges(e)}
    >
      {store[source].map((option) => (
        <option
          value={typeof option === 'string' ? option.toString() : (option as any).nome || (option as any).UF}
          key={typeof option === 'string' ? option.toString() : (option as any).id || (option as any).UF}
          aria-selected="false"
        >
          {typeof option === 'string' ? option : (option as any).nome || (option as any).estado}
        </option>
      ))}
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
      <FormField label="Origem:" name="orig" source="origem" />
      <FormField label="Município de Origem:" name="municipioOrigem" source="municipiosOrigem" />
      <FormField label="Destino:" name="dest" source="destino" />
      <FormField label="Município de Destino:" name="municipioDestino" source="municipiosDestino" />
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
