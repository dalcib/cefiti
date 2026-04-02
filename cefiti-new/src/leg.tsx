import { render } from 'preact'
import 'md-block'
import { leg_texto } from '#legislacao'

interface LegislacaoText {
	id: string
	texto: string
}

function LegView() {
	const params = new URLSearchParams(window.location.search)
	const id = params.get('id')

	if (!id) {
		return <h3>ID da legislação não fornecido.</h3>
	}

	const legislation = (leg_texto as LegislacaoText[]).find((l) => l.id === id)

	if (!legislation) {
		return <h3>Legislação com ID "{id}" não encontrada.</h3>
	}

	document.title = `${id} - CEFiTI`

	return (
		<div>
			<md-block>{legislation.texto}</md-block>
		</div>
	)
}

const root = document.getElementById('root')
if (root) {
	root.textContent = '' // Remove loading text
	render(<LegView />, root)
}


