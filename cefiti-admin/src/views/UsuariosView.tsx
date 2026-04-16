import { store } from '../store'

export function UsuariosView() {
  const { usuarios: state } = store.views

  const handleEdit = (u: any) => {
    state.editing = { ...u }
    state.isNew = false
  }

  const handleAdd = () => {
    state.editing = { 
      email: '', 
      nome: '', 
      cargo: '', 
      lotacao: '', 
      perfil: 'usuário' 
    }
    state.isNew = true
  }

  const handleSave = async (e: Event) => {
    e.preventDefault()
    if (!state.editing) return

    try {
      await store.saveAuthorizedUser(state.editing)
      state.editing = null
    } catch (error) {
      console.error('Error saving user:', error)
      alert('Erro ao salvar usuário. Verifique se você tem permissões de administrador.')
    }
  }

  const handleDelete = async (u: any) => {
    if (u.email === store.user?.email) {
      alert('Você não pode se excluir da lista de acesso.')
      return
    }
    if (!confirm(`Deseja realmente remover o acesso de ${u.nome} (${u.email})?`)) return
    try {
      await store.deleteAuthorizedUser(u.email)
    } catch (error) {
      console.error('Error deleting user:', error)
      alert('Erro ao excluir usuário.')
    }
  }

  if (store.loading.authorized_users) return <p>Carregando usuários...</p>

  if (state.editing) {
    return (
      <div id="conteudo">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h4>{state.isNew ? 'NOVO USUÁRIO AUTORIZADO' : 'EDITAR USUÁRIO'}</h4>
          <button
            type="button"
            className="form-button"
            onClick={() => (state.editing = null)}
            style={{ background: '#ccc', color: '#333' }}
          >
            VOLTAR
          </button>
        </div>
        <div>
          <form onSubmit={handleSave} className="card">
            <h5>DADOS DE ACESSO</h5>
            <br />
            <div>
              <label htmlFor="email">E-mail (ID de acesso)</label>
              <input
                id="email"
                type="email"
                className="form-text"
                value={state.editing.email}
                required
                readOnly={!state.isNew}
                style={!state.isNew ? { backgroundColor: '#eee' } : {}}
                onInput={(e) =>
                  (state.editing!.email = (e.target as HTMLInputElement).value)
                }
                placeholder="exemplo@agro.gov.br"
              />
            </div>
            <div>
              <label htmlFor="nome">Nome Completo</label>
              <input
                id="nome"
                type="text"
                className="form-text"
                value={state.editing.nome}
                required
                onInput={(e) =>
                  (state.editing!.nome = (e.target as HTMLInputElement).value)
                }
              />
            </div>
            <div>
              <label htmlFor="cargo">Cargo / Função</label>
              <input
                id="cargo"
                type="text"
                className="form-text"
                value={state.editing.cargo}
                required
                onInput={(e) =>
                  (state.editing!.cargo = (e.target as HTMLInputElement).value)
                }
              />
            </div>
            <div>
              <label htmlFor="lotacao">Lotação (Unidade/Estado)</label>
              <input
                id="lotacao"
                type="text"
                className="form-text"
                value={state.editing.lotacao}
                required
                onInput={(e) =>
                  (state.editing!.lotacao = (e.target as HTMLInputElement).value)
                }
              />
            </div>
            <div>
              <label htmlFor="perfil">Perfil de Acesso</label>
              <select
                id="perfil"
                className="form-text"
                value={state.editing.perfil}
                required
                onChange={(e) =>
                  (state.editing!.perfil = (e.target as HTMLSelectElement).value as any)
                }
              >
                <option value="usuário">Usuário (Pode editar o próprio perfil)</option>
                <option value="administrador">Administrador (Gestão de usuários)</option>
              </select>
            </div>
            <br />
            <button
              className="form-button"
              type="submit"
            >
              SALVAR AUTORIZAÇÃO
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div id="conteudo">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h4>GESTÃO DE USUÁRIOS AUTORIZADOS</h4>
        <button type="button" className="form-button" onClick={handleAdd}>
          NOVO USUÁRIO
        </button>
      </div>
      <div>
        <table className="table-grid" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Nome</th>
              <th style={{ width: '25%' }}>E-mail</th>
              <th style={{ width: '15%' }}>Perfil</th>
              <th style={{ width: '20%' }}>Lotação</th>
              <th style={{ width: '15%' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {store.authorized_users.map((u) => (
              <tr key={u.email}>
                <td>{u.nome}</td>
                <td>{u.email}</td>
                <td>
                    <span style={{
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '0.85em',
                        backgroundColor: u.perfil === 'administrador' ? '#ffd70033' : '#eee',
                        color: u.perfil === 'administrador' ? '#856404' : '#666',
                        fontWeight: 'bold'
                    }}>
                        {u.perfil.toUpperCase()}
                    </span>
                </td>
                <td>{u.lotacao}</td>
                <td style={{ textAlign: 'center' }}>
                  <button
                    type="button"
                    className="form-button"
                    style={{ fontSize: '0.8em', padding: '2px 5px', marginRight: '5px' }}
                    onClick={() => handleEdit(u)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="form-button"
                    style={{ fontSize: '0.8em', padding: '2px 5px', background: '#dc3545' }}
                    onClick={() => handleDelete(u)}
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
