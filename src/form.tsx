import { memo } from 'react'
import { Store, useStore } from './store'

interface PropsSelect {
  source: 'listaNomesSci' | 'listaNomesVul' | 'partes' | 'destino' | 'origem'
  name: keyof Store['dados']
}

const Select = memo(function Select({ source, name }: PropsSelect) {
  const store = useStore()

  return (
    <select
      style={name === 'prod' ? { minWidth: '145px' } : {}}
      id={name}
      className={name === 'hospSci' ? 'italic form-select' : 'form-select'}
      value={store.dados[name]}
      name={name}
      onChange={(e) => store.handleChanges(e)}
    >
      {store[source].map((option, i) => (
        <option
          value={typeof option === 'string' ? option : option.UF}
          key={i}
          aria-selected="false"
        >
          {typeof option === 'string' ? option : option.estado}
        </option>
      ))}
    </select>
  )
})

function Form() {
  const store = useStore()
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
      <FormField label="Destino:" name="dest" source="destino" />
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

const FormField = memo(function FormField({
  label,
  name,
  source,
}: FormFieldProps) {
  return (
    <div>
      <label className="form" htmlFor={name}>
        {label}
      </label>
      <Select name={name} source={source} />
    </div>
  )
})

export default Form
