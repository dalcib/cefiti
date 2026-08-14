import { type Praga, store } from '../store'

export function PragasView() {
  const { pragas: state } = store.views

  const handleEdit = (praga: Praga) => {
    state.editing = {
      ...praga,
      files: Array.isArray(praga.files) ? [...praga.files] : [],
      hosp: Array.isArray(praga.hosp) ? [...praga.hosp] : [],
    }
    state.isNew = false
    state.selectedLegId = ''
    state.selectedHospId = ''
  }

  const handleAdd = () => {
    state.editing = { prag: '', pragc: '', hosp: [], files: [] }
    state.isNew = true
    state.selectedLegId = ''
    state.selectedHospId = ''
  }

  const handleSave = async (e: Event) => {
    e.preventDefault()
    if (!state.editing) return

    try {
      await store.savePraga(state.editing)
      state.editing = null
    } catch (error) {
      console.error('Error saving praga:', error)
      alert('Erro ao salvar praga.')
    }
  }

  const handleDelete = async (prag: string) => {
    if (!confirm(`Deseja realmente excluir a praga ${prag}?`)) return
    try {
      await store.deletePraga(prag)
    } catch (error) {
      console.error('Error deleting praga:', error)
      alert('Erro ao excluir praga.')
    }
  }

  const handleAddLegislacao = () => {
    if (!state.selectedLegId || !state.editing) return
    const currentFiles = state.editing.files || []
    if (!currentFiles.includes(state.selectedLegId)) {
      state.editing.files = [...currentFiles, state.selectedLegId]
    }
    state.selectedLegId = ''
  }

  const handleRemoveLegislacao = (idToRemove: string) => {
    if (!state.editing) return
    state.editing.files = (state.editing.files || []).filter(
      (id) => id !== idToRemove,
    )
  }

  const handleAddHospedeiro = () => {
    if (!state.selectedHospId || !state.editing) return
    const numId = Number(state.selectedHospId)
    const currentHosp = state.editing.hosp || []
    if (!currentHosp.includes(numId)) {
      state.editing.hosp = [...currentHosp, numId]
    }
    state.selectedHospId = ''
  }

  const handleRemoveHospedeiro = (idToRemove: number) => {
    if (!state.editing) return
    state.editing.hosp = (state.editing.hosp || []).filter(
      (id) => Number(id) !== Number(idToRemove),
    )
  }

  if (
    store.loading.pragas ||
    store.loading.hospedeiros ||
    store.loading.legislacoes
  ) {
    return <p>Carregando pragas e relacionamentos...</p>
  }

  if (state.editing) {
    const availableLegislacoes = store.legislacoes.filter(
      (l) => !(state.editing?.files || []).includes(l.id),
    )

    const availableHospedeiros = store.hospedeiros.filter(
      (h) => !(state.editing?.hosp || []).includes(h.id),
    )

    return (
      <div id="conteudo">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h4>
            {state.isNew
              ? 'NOVA PRAGA'
              : store.isReadOnly
                ? 'VISUALIZAR PRAGA'
                : 'EDITAR PRAGA'}
          </h4>
          <button
            type="button"
            className="form-button"
            onClick={() => (state.editing = null)}
            style="background: #ccc; color: #333;"
          >
            VOLTAR
          </button>
        </div>
        <div>
          <form onSubmit={handleSave}>
            <div className="card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: '15px',
                }}
              >
                <h5 style={{ margin: 0 }}>DADOS DA PRAGA</h5>
                {!store.isReadOnly && (
                  <button
                    className="form-button"
                    type="submit"
                    style={{ marginLeft: 'auto' }}
                  >
                    SALVAR
                  </button>
                )}
              </div>
              <div className="grid-2col">
                <div>
                  <label htmlFor="prag">Nome Científico</label>
                  <input
                    id="prag"
                    type="text"
                    className="form-text"
                    value={state.editing.prag}
                    readOnly={!state.isNew || store.isReadOnly}
                    required
                    onInput={(e) => {
                      if (!store.isReadOnly) {
                        state.editing!.prag = (
                          e.target as HTMLInputElement
                        ).value
                      }
                    }}
                    style={
                      !state.isNew || store.isReadOnly
                        ? { backgroundColor: '#eee' }
                        : {}
                    }
                  />
                </div>
                <div>
                  <label htmlFor="pragc">Nome Comum</label>
                  <input
                    id="pragc"
                    type="text"
                    className="form-text"
                    value={state.editing.pragc}
                    readOnly={store.isReadOnly}
                    required
                    onInput={(e) => {
                      if (!store.isReadOnly) {
                        state.editing!.pragc = (
                          e.target as HTMLInputElement
                        ).value
                      }
                    }}
                    style={store.isReadOnly ? { backgroundColor: '#eee' } : {}}
                  />
                </div>
              </div>
            </div>

            <div className="grid-2col" style="align-items: start; margin-bottom: 20px;">
              {/* Painel CRUD Legislações */}
              <div className="card" style="margin-bottom: 0;">
                <h5>LEGISLAÇÕES ASSOCIADAS (files)</h5>
                <br />
                {!store.isReadOnly && (
                  <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                    <select
                      className="form-select"
                      value={state.selectedLegId}
                      onChange={(e) =>
                        (state.selectedLegId = (
                          e.target as HTMLSelectElement
                        ).value)
                      }
                    >
                      <option value="">
                        Selecione a legislação para adicionar...
                      </option>
                      {availableLegislacoes.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.id} {l.leg ? `- ${l.leg}` : ''}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="form-button"
                      onClick={handleAddLegislacao}
                      disabled={!state.selectedLegId}
                    >
                      ADICIONAR
                    </button>
                  </div>
                )}
                {(state.editing.files || []).length === 0 ? (
                  <p style="color: #666; font-style: italic;">
                    Nenhuma legislação associada.
                  </p>
                ) : (
                  <table className="table-grid" style="width: 100%;">
                    <thead>
                      <tr>
                        <th style="width: 35%;">ID / Sigla</th>
                        <th style="width: 45%;">Título</th>
                        {!store.isReadOnly && (
                          <th style="width: 20%;">Ações</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {(state.editing.files || []).map((fileId) => {
                        const legObj = store.legislacoes.find(
                          (l) => l.id === fileId,
                        )
                        return (
                          <tr key={fileId}>
                            <td>{fileId}</td>
                            <td>{legObj ? legObj.leg : '-'}</td>
                            {!store.isReadOnly && (
                              <td style="text-align: center;">
                                <button
                                  type="button"
                                  className="form-button"
                                  style="font-size: 0.8em; padding: 2px 5px; background: #dc3545;"
                                  onClick={() =>
                                    handleRemoveLegislacao(fileId)
                                  }
                                >
                                  Remover
                                </button>
                              </td>
                            )}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                )}
              </div>

              {/* Painel CRUD Hospedeiros */}
              <div className="card" style="margin-bottom: 0;">
                <h5>HOSPEDEIROS ASSOCIADOS (hosp)</h5>
                <br />
                {!store.isReadOnly && (
                  <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                    <select
                      className="form-select"
                      value={state.selectedHospId}
                      onChange={(e) =>
                        (state.selectedHospId = (
                          e.target as HTMLSelectElement
                        ).value)
                      }
                    >
                      <option value="">
                        Selecione o hospedeiro para adicionar...
                      </option>
                      {availableHospedeiros.map((h) => (
                        <option key={h.id} value={h.id}>
                          [{h.id}] {h.nomeSci}
                          {h.nomeVul?.length
                            ? ` (${h.nomeVul.join(', ')})`
                            : ''}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="form-button"
                      onClick={handleAddHospedeiro}
                      disabled={!state.selectedHospId}
                    >
                      ADICIONAR
                    </button>
                  </div>
                )}
                {(state.editing.hosp || []).length === 0 ? (
                  <p style="color: #666; font-style: italic;">
                    Nenhum hospedeiro associado.
                  </p>
                ) : (
                  <table className="table-grid" style="width: 100%;">
                    <thead>
                      <tr>
                        <th style="width: 15%;">ID</th>
                        <th style="width: 40%;">Nome Científico</th>
                        <th style="width: 25%;">Nomes Vulgares</th>
                        {!store.isReadOnly && (
                          <th style="width: 20%;">Ações</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {(state.editing.hosp || []).map((hospId) => {
                        const hospObj = store.hospedeiros.find(
                          (h) => h.id === Number(hospId),
                        )
                        return (
                          <tr key={hospId}>
                            <td>{hospId}</td>
                            <td>{hospObj ? hospObj.nomeSci : '-'}</td>
                            <td>
                              {hospObj?.nomeVul ? hospObj.nomeVul.join(', ') : '-'}
                            </td>
                            {!store.isReadOnly && (
                              <td style="text-align: center;">
                                <button
                                  type="button"
                                  className="form-button"
                                  style="font-size: 0.8em; padding: 2px 5px; background: #dc3545;"
                                  onClick={() =>
                                    handleRemoveHospedeiro(Number(hospId))
                                  }
                                >
                                  Remover
                                </button>
                              </td>
                            )}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {!store.isReadOnly && (
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
        <h4>MANUTENÇÃO DE PRAGAS</h4>
        {!store.isReadOnly && (
          <button type="button" className="form-button" onClick={handleAdd}>
            NOVA PRAGA
          </button>
        )}
      </div>
      <div>
        <table className="table-grid" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 40%;">Nome Científico</th>
              <th style="width: 40%;">Nome Comum</th>
              <th style="width: 20%;">Ações</th>
            </tr>
          </thead>
          <tbody>
            {store.pragas.map((praga) => (
              <tr key={praga.prag}>
                <td>{praga.prag}</td>
                <td>{praga.pragc}</td>
                <td style="text-align: center;">
                  <button
                    type="button"
                    className="form-button"
                    style="font-size: 0.8em; padding: 2px 5px; margin-right: 5px;"
                    onClick={() => handleEdit(praga)}
                  >
                    {store.isReadOnly ? 'Visualizar' : 'Editar'}
                  </button>
                  {!store.isReadOnly && (
                    <button
                      type="button"
                      className="form-button"
                      style="font-size: 0.8em; padding: 2px 5px; background: #dc3545;"
                      onClick={() => handleDelete(praga.prag)}
                    >
                      Excluir
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

