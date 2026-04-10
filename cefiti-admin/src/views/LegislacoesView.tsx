import { marked } from 'marked'
import { store } from '../store'

export function LegislacoesView() {
  const { legislacoes: state } = store.views

  const handleEdit = async (l: any) => {
    state.texto = await store.getLegislacaoTexto(l.id)
    state.editing = { ...l }
    state.isNew = false
    state.showPreview = false
  }

  const handleAdd = () => {
    state.editing = { id: '', leg: '', data: '' }
    state.texto = ''
    state.isNew = true
    state.showPreview = false
  }

  const handleSave = async (e: Event) => {
    e.preventDefault()
    if (!state.editing) return

    try {
      await store.saveLegislacao(state.editing, state.texto || '')
      state.editing = null
    } catch (error) {
      console.error('Error saving legislation:', error)
      alert('Erro ao salvar legislação.')
    }
  }

  const handleDelete = async (l: any) => {
    if (!confirm(`Deseja realmente excluir a legislação ${l.id}?`)) return
    try {
      await store.deleteLegislacao(l.id)
    } catch (error) {
      console.error('Error deleting legislation:', error)
      alert('Erro ao excluir legislação.')
    }
  }

  if (store.loading.legislacoes) return <p>Carregando legislações...</p>

  if (state.editing) {
    return (
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h1>{state.isNew ? 'Nova Legislação' : 'Editar Legislação'}</h1>
          <div style="display: flex; gap: 0.5rem;">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => (state.showPreview = !state.showPreview)}
            >
              {state.showPreview ? 'Editar Texto' : 'Pré-visualizar'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => (state.editing = null)}
            >
              Voltar
            </button>
          </div>
        </div>
        <div className="card">
          <form onSubmit={handleSave}>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
              <div>
                <label htmlFor="leg-id">
                  ID / Sigla (Ex: Portaria 123/2024)
                </label>
                <input
                  id="leg-id"
                  type="text"
                  value={state.editing.id}
                  required
                  readOnly={!state.isNew}
                  onInput={(e) =>
                    (state.editing!.id = (e.target as HTMLInputElement).value)
                  }
                  style={!state.isNew ? { backgroundColor: '#eee' } : {}}
                />
              </div>
              <div>
                <label htmlFor="leg-title">Título / Descrição</label>
                <input
                  id="leg-title"
                  type="text"
                  value={state.editing.leg}
                  required
                  onInput={(e) =>
                    (state.editing!.leg = (e.target as HTMLInputElement).value)
                  }
                />
              </div>
              <div>
                <label htmlFor="leg-date">Data (Ex: 2024-04-09)</label>
                <input
                  id="leg-date"
                  type="date"
                  value={state.editing.data}
                  required
                  onInput={(e) =>
                    (state.editing!.data = (e.target as HTMLInputElement).value)
                  }
                />
              </div>
            </div>

            <div style="margin-top: 1.5rem;">
              <label htmlFor="leg-content">Conteúdo (Markdown)</label>
              {state.showPreview ? (
                <div
                  className="card"
                  style="border: 1px solid var(--border-color); min-height: 300px; padding: 1rem; overflow-y: auto;"
                  dangerouslySetInnerHTML={{
                    __html: (marked.parse(state.texto) as string) || '',
                  }}
                />
              ) : (
                <textarea
                  id="leg-content"
                  value={state.texto}
                  onInput={(e) =>
                    (state.texto = (e.target as HTMLTextAreaElement).value)
                  }
                  style="width: 100%; min-height: 400px; padding: 0.5rem; font-family: monospace; border: 1px solid var(--border-color); border-radius: 4px;"
                />
              )}
            </div>

            {!state.showPreview && (
              <button
                className="btn btn-primary"
                type="submit"
                style="margin-top: 1rem;"
              >
                Salvar
              </button>
            )}
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h1>Legislações</h1>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          + Nova Legislação
        </button>
      </div>
      <div className="card">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border-color); text-align: left;">
              <th style="padding: 0.5rem;">ID / Sigla</th>
              <th style="padding: 0.5rem;">Título</th>
              <th style="padding: 0.5rem;">Data</th>
              <th style="padding: 0.5rem;">Ações</th>
            </tr>
          </thead>
          <tbody>
            {store.legislacoes.map((l) => (
              <tr
                key={l.id}
                style="border-bottom: 1px solid var(--border-color);"
              >
                <td style="padding: 0.5rem;">{l.id}</td>
                <td style="padding: 0.5rem;">{l.leg}</td>
                <td style="padding: 0.5rem;">{l.data}</td>
                <td style="padding: 0.5rem;">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleEdit(l)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style="margin-left: 0.5rem; color: var(--danger-color);"
                    onClick={() => handleDelete(l)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
