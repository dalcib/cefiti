import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { version } from './../package.json'
import { auth } from './firebase'
import { type AdminView, store } from './store'
import { CatalogosView } from './views/CatalogosView'
import { HospedeirosView } from './views/HospedeirosView'
import { LegislacoesView } from './views/LegislacoesView'
import { PragasView } from './views/PragasView'
import { RulesView } from './views/RulesView'
import { StatusMunicipiosView } from './views/StatusMunicipiosView'
import { UsuariosView } from './views/UsuariosView'
import { PerfilView } from './views/PerfilView'

export function App() {
  if (store.authLoading) {
    return (
      <div className="carregando">
        <p>Carregando...</p>
      </div>
    )
  }

  if (store.view === 'login') {
    return <LoginView />
  }

  if (store.view === 'select_environment') {
    return <SelectEnvironmentView />
  }

  return (
    <div id="resolucao">
      <Header />
      <Nav />
      <main id="corpo">
        <CurrentView />
      </main>
    </div>
  )
}

function Header() {
  const appVersion = `${version.split('.')[0]}.${store.catalogos.dbVersion}`
  const envLabel = store.environment === 'producao' ? 'PRODUÇÃO (Visualização)' : 'DESENVOLVIMENTO (Edição)'
  const envColor = store.environment === 'producao' ? '#28a745' : '#007bff'

  return (
    <div id="moldura-topo">
      <div id="topo">
        <div id="identificacao-ministerio">
          <span>
            <div id="imagemGov">
              <span className="ministerio-text">
                Ministério da Agricultura e Pecuária
              </span>
              <a
                href="http://www.brasil.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                id="brasilgov"
                className="visually-hidden"
              >
                Brasil.gov.br
              </a>
            </div>
          </span>
        </div>
        <div id="identificacao-sistema">
          <div>
            <h1>CEFiTI Admin</h1>
            <h2>Catálogo de Exigências Fitossanitárias - Administração</h2>
          </div>

          <div
            style={{
              textAlign: 'right',
              marginRight: '20px',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                color: '#dcecff',
                fontSize: '0.9em',
                fontWeight: 'bold',
                borderBottom: '1px solid #dcecff',
                marginBottom: '5px',
                paddingBottom: '2px',
              }}
            >
              Versão {appVersion}
            </div>
            {store.environment && (
              <div
                style={{
                  fontSize: '0.85em',
                  marginBottom: '5px',
                  color: '#ffffff',
                }}
              >
                Ambiente:{' '}
                <span
                  style={{
                    backgroundColor: envColor,
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    fontSize: '0.95em',
                  }}
                >
                  {envLabel}
                </span>{' '}
                <button
                  type="button"
                  onClick={() => store.setView('select_environment')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: 0,
                    marginLeft: '8px',
                    fontSize: '0.95em',
                  }}
                >
                  [Alterar]
                </button>
              </div>
            )}
            {store.user && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  store.logout()
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#ffffff',
                  textDecoration: 'underline',
                  fontSize: '0.8em',
                  padding: 0,
                }}
              >
                Sair
              </button>
            )}
          </div>
        </div>
        <div id="dados-login" />
      </div>
    </div>
  )
}

function Nav() {
  return (
    <div id="moldura-navegacao-global">
      <div id="navegacao-global">
        <p>
          <NavItem view="dashboard" label="Painel" />
          <NavItem view="pragas" label="Pragas" />
          <NavItem view="hospedeiros" label="Hospedeiros" />
          <NavItem view="legislacoes" label="Legislações" />
          <NavItem view="rules" label="Regras" />
          <NavItem view="status_municipios" label="Status Municipais" />
          <NavItem view="catalogos" label="Configurações" />
          {store.currentProfile?.perfil === 'administrador' && (
            <NavItem view="usuarios" label="Usuários" />
          )}
          <NavItem view="perfil" label="Meu Perfil" />
        </p>
      </div>
    </div>
  )
}

function NavItem({ view, label }: { view: AdminView; label: string }) {
  const active = store.view === view
  return (
    <span>
      <button
        type="button"
        className={active ? 'active' : ''}
        onClick={() => store.setView(view)}
        style={
          active
            ? { backgroundColor: 'rgba(255,255,255,0.1)', fontWeight: 'bold' }
            : {}
        }
      >
        {label.toUpperCase()}
      </button>
    </span>
  )
}

function LoginView() {
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Login failed:', error)
      alert('Falha no login com Google.')
    }
  }

  const loginMicrosoft = async () => {
    await store.loginWithMicrosoft()
  }

  return (
    <div id="resolucao">
      <div id="moldura-topo">
        <div id="topo" style={{ height: '116px' }}>
          <div id="identificacao-ministerio">
            <span>
              <div id="imagemGov">
                <span className="ministerio-text">
                  Ministério da Agricultura e Pecuária
                </span>
              </div>
            </span>
          </div>
          <div id="identificacao-sistema">
            <h1>CEFiTI Admin</h1>
            <h2>Controle de Acesso</h2>
          </div>
        </div>
      </div>

      <div
        id="corpo"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
          background: '#f4f6f9',
        }}
      >
        <div
          id="conteudo-login-novo"
          style={{
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            padding: '40px',
            backgroundColor: 'white',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ marginBottom: '20px', color: '#0f4098' }}>
            Acesso Restrito
          </h3>
          <p style={{ marginBottom: '30px' }}>
            Identifique-se para gerenciar o catálogo.
          </p>
          <button
            type="button"
            className="form-button"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '1.1em',
              backgroundColor: '#00a4ef',
              marginBottom: '10px',
              color: 'white',
              border: 'none',
            }}
            onClick={loginMicrosoft}
          >
            ENTRAR COM MICROSOFT (MAPA)
          </button>
          <button
            type="button"
            className="form-button"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '1.1em',
              backgroundColor: '#4285f4',
              color: 'white',
              border: 'none',
            }}
            onClick={loginGoogle}
          >
            ENTRAR COM GOOGLE
          </button>
        </div>
      </div>
    </div>
  )
}

function CurrentView() {
  switch (store.view) {
    case 'dashboard':
      return (
        <div id="conteudo">
          <h4>PAINEL DE CONTROLE</h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            <div className="card" style={{ textAlign: 'center' }}>
              <h5>SISTEMA</h5>
              <p style={{ fontSize: '3em', margin: '10px 0' }}>🌐</p>
              <p>Firestore Conectado</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h5>ATUALIZAÇÃO</h5>
              <p style={{ fontSize: '3em', margin: '10px 0' }}>📅</p>
              <p>Última carga: {store.catalogos.lastUpdate || '---'}</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h5>VERSÃO DADOS</h5>
              <p style={{ fontSize: '3em', margin: '10px 0' }}>📂</p>
              <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
                Versão {store.catalogos.dbVersion}
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h5>USUÁRIO</h5>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '10px',
                }}
              >
                <img
                  src={store.user?.photoURL || ''}
                  alt="Avatar"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '2px solid #0f4098',
                  }}
                />
                <div>
                  <p style={{ fontWeight: 'bold' }}>
                    {store.user?.displayName}
                  </p>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>
                    {store.user?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="area-mensagens" style={{ marginTop: '30px' }}>
            <ul className="msg-informativa">
              <li>Bem-vindo ao sistema de manutenção do CEFiTI.</li>
              <li>
                Utilize o menu superior para navegar pelas seções de dados.
              </li>
              <li style={store.isReadOnly ? { color: '#28a745' } : { color: '#d12f19' }}>
                {store.isReadOnly 
                  ? 'ℹ️ Você está no ambiente de PRODUÇÃO (Apenas Visualização).' 
                  : '⚠️ Você está no ambiente de DESENVOLVIMENTO. Alterações são salvas em tempo real no banco de dados.'}
              </li>
            </ul>
          </div>
        </div>
      )
    case 'select_environment':
      return <SelectEnvironmentView />
    case 'pragas':
      return <PragasView />
    case 'hospedeiros':
      return <HospedeirosView />
    case 'legislacoes':
      return <LegislacoesView />
    case 'rules':
      return <RulesView />
    case 'status_municipios':
      return <StatusMunicipiosView />
    case 'catalogos':
      return <CatalogosView />
    case 'usuarios':
      return <UsuariosView />
    case 'perfil':
      return <PerfilView />
    default:
      return <div>View não encontrada: {store.view}</div>
  }
}

function SelectEnvironmentView() {
  const handleSelect = async (env: 'producao' | 'desenvolvimento') => {
    try {
      await store.selectEnvironment(env)
    } catch (e) {
      alert('Erro ao selecionar ambiente.')
    }
  }

  return (
    <div id="resolucao">
      <div id="moldura-topo">
        <div id="topo" style={{ height: '116px' }}>
          <div id="identificacao-ministerio">
            <span>
              <div id="imagemGov">
                <span className="ministerio-text">
                  Ministério da Agricultura e Pecuária
                </span>
              </div>
            </span>
          </div>
          <div id="identificacao-sistema">
            <h1>CEFiTI Admin</h1>
            <h2>Seleção de Ambiente de Dados</h2>
          </div>
        </div>
      </div>

      <div
        id="corpo"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '450px',
          background: '#f4f6f9',
          padding: '20px',
        }}
      >
        <h3 style={{ marginBottom: '10px', color: '#0f4098' }}>Selecione o Ambiente de Trabalho</h3>
        <p style={{ marginBottom: '30px', color: '#555' }}>
          Escolha entre a base de produção (somente leitura) ou de desenvolvimento (edição).
        </p>

        {store.loadingVersions ? (
          <p>Carregando informações das versões...</p>
        ) : (
          <div
            style={{
              display: 'flex',
              gap: '30px',
              maxWidth: '800px',
              width: '100%',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            {/* Card Produção */}
            <div
              className="card"
              style={{
                flex: '1',
                minWidth: '280px',
                maxWidth: '350px',
                textAlign: 'center',
                padding: '30px',
                border: '1px solid #ccc',
                boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                backgroundColor: 'white',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h4 style={{ color: '#28a745', fontWeight: 'bold', margin: '0 0 10px 0' }}>PRODUÇÃO</h4>
                <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '15px' }}>
                  Base oficial do aplicativo público (cefiti-new). Alterações não permitidas.
                </p>
                <div style={{ padding: '15px 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', margin: '15px 0' }}>
                  <p style={{ fontSize: '1.3em', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                    Versão {store.prodVersion}
                  </p>
                  <p style={{ fontSize: '0.8em', color: '#888', margin: 0 }}>
                    Última carga: {store.prodLastUpdate || 'Nenhuma'}
                  </p>
                </div>
                <p style={{ color: '#28a745', fontSize: '0.85em', fontWeight: 'bold', marginBottom: '20px' }}>
                  ℹ️ MODO APENAS VISUALIZAÇÃO
                </p>
              </div>
              <button
                type="button"
                className="form-button"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                onClick={() => handleSelect('producao')}
              >
                VISUALIZAR PRODUÇÃO
              </button>
            </div>

            {/* Card Desenvolvimento */}
            <div
              className="card"
              style={{
                flex: '1',
                minWidth: '280px',
                maxWidth: '350px',
                textAlign: 'center',
                padding: '30px',
                border: '1px solid #ccc',
                boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                backgroundColor: 'white',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h4 style={{ color: '#007bff', fontWeight: 'bold', margin: '0 0 10px 0' }}>DESENVOLVIMENTO</h4>
                <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '15px' }}>
                  Base de rascunhos para edição de pragas, hospedeiros, exigências e regras.
                </p>
                <div style={{ padding: '15px 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', margin: '15px 0' }}>
                  <p style={{ fontSize: '1.3em', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                    Versão {store.devVersion}
                  </p>
                  <p style={{ fontSize: '0.8em', color: '#888', margin: 0 }}>
                    Status: Edição habilitada
                  </p>
                </div>
                <p style={{ color: '#007bff', fontSize: '0.85em', fontWeight: 'bold', marginBottom: '20px' }}>
                  ✍️ MODO EDIÇÃO E TESTES
                </p>
              </div>
              <button
                type="button"
                className="form-button"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                onClick={() => handleSelect('desenvolvimento')}
              >
                EDITAR DESENVOLVIMENTO
              </button>
            </div>
          </div>
        )}

        <div style={{ marginTop: '30px' }}>
          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#666',
              textDecoration: 'underline',
              fontSize: '0.9em'
            }}
            onClick={() => store.logout()}
          >
            Sair da Conta
          </button>
        </div>
      </div>
    </div>
  )
}
