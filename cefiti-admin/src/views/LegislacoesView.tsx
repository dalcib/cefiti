import { marked } from 'marked'
import { type Legislacao, store } from '../store'

export function LegislacoesView() {
  const { legislacoes: state } = store.views

  const handleEdit = async (l: Legislacao) => {
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
    const editing = state.editing
    if (!editing) return

    try {
      await store.saveLegislacao(editing, state.texto || '')
      state.editing = null
    } catch (error) {
      console.error('Error saving legislation:', error)
      alert('Erro ao salvar legislação.')
    }
  }

  const handleDelete = async (l: Legislacao) => {
    if (!confirm(`Deseja realmente excluir a legislação ${l.id}?`)) return
    try {
      await store.deleteLegislacao(l.id)
    } catch (error) {
      console.error('Error deleting legislation:', error)
      alert('Erro ao excluir legislação.')
    }
  }

  if (store.loading.legislacoes) return <p>Carregando legislações...</p>

  const editing = state.editing
  if (editing) {
    return (
      <div id="conteudo">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h4>{state.isNew ? 'NOVA LEGISLAÇÃO' : 'EDITAR LEGISLAÇÃO'}</h4>
          <div style="display: flex; gap: 10px;">
            <button
              type="button"
              className="form-button"
              style="background: #eee; color: #333;"
              onClick={() => (state.showPreview = !state.showPreview)}
            >
              {state.showPreview ? 'EDITAR TEXTO' : 'PRÉ-VISUALIZAR'}
            </button>
            <button
              type="button"
              className="form-button"
              style="background: #ccc; color: #333;"
              onClick={() => (state.editing = null)}
            >
              VOLTAR
            </button>
          </div>
        </div>
        <div>
          <form onSubmit={handleSave} className="card">
            <h5>DADOS DA LEGISLAÇÃO</h5>
            <br />
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
              <div>
                <label htmlFor="leg-id">
                  ID / Sigla (Ex: Portaria 123/2024)
                </label>
                <input
                  id="leg-id"
                  type="text"
                  className="form-text"
                  value={editing.id}
                  required
                  readOnly={!state.isNew}
                  onInput={(e) =>
                    (editing.id = (e.target as HTMLInputElement).value)
                  }
                  style={!state.isNew ? { backgroundColor: '#eee' } : {}}
                />
              </div>
              <div>
                <label htmlFor="leg-title">Título / Descrição</label>
                <input
                  id="leg-title"
                  type="text"
                  className="form-text"
                  value={editing.leg}
                  required
                  onInput={(e) =>
                    (editing.leg = (e.target as HTMLInputElement).value)
                  }
                />
              </div>
              <div>
                <label htmlFor="leg-date">Data</label>
                <input
                  id="leg-date"
                  type="date"
                  className="form-text"
                  value={editing.data}
                  required
                  onInput={(e) =>
                    (editing.data = (e.target as HTMLInputElement).value)
                  }
                />
              </div>
            </div>

            <div style="margin-top: 20px;">
              <label htmlFor="leg-content">Conteúdo (Markdown)</label>
              {state.showPreview ? (
                <div
                  className="card"
                  style="border: 1px solid #ccc; min-height: 300px; padding: 20px; overflow-y: auto;"
                  dangerouslySetInnerHTML={{
                    __html: (marked.parse(state.texto) as string) || '',
                  }}
                />
              ) : (
                <textarea
                  id="leg-content"
                  className="form-textarea"
                  value={state.texto}
                  onInput={(e) =>
                    (state.texto = (e.target as HTMLTextAreaElement).value)
                  }
                  style="width: 100%; min-height: 400px; padding: 10px; font-family: monospace;"
                />
              )}
            </div>
            <br />
            {!state.showPreview && (
              <button className="form-button" type="submit">
                SALVAR
              </button>
            )}
          </form>
        </div>
      </div>
    )
  }

  return (
    <div id="conteudo">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h4>LEGISLAÇÕES</h4>
        <button type="button" className="form-button" onClick={handleAdd}>
          NOVA LEGISLAÇÃO
        </button>
      </div>
      <div>
        <table className="table-grid" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 25%;">ID / Sigla</th>
              <th style="width: 45%;">Título</th>
              <th style="width: 15%;">Data</th>
              <th style="width: 15%;">Ações</th>
            </tr>
          </thead>
          <tbody>
            {store.legislacoes.map((l) => (
              <tr key={l.id}>
                <td>{l.id}</td>
                <td>{l.leg}</td>
                <td style="text-align: center;">{l.data}</td>
                <td style="text-align: center;">
                  <button
                    type="button"
                    className="form-button"
                    style="font-size: 0.8em; padding: 2px 5px; margin-right: 5px;"
                    onClick={() => handleEdit(l)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="form-button"
                    style="font-size: 0.8em; padding: 2px 5px; background: #dc3545;"
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
