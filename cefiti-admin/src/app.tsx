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
              <li style={{ color: '#d12f19' }}>
                ⚠️ Alterações são salvas em tempo real no banco de dados.
              </li>
            </ul>
          </div>
        </div>
      )
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
