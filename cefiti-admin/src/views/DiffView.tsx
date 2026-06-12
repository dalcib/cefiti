import { store } from '../store'

export function DiffView() {
  if (store.loadingDiff) {
    return (
      <div id="conteudo" style="text-align: center; padding: 40px;">
        <h4 style="color: #0f4098;">GERANDO COMPARATIVO (DIFF)...</h4>
        <p style="color: #666;">
          Buscando dados das bases de produção e desenvolvimento no Firestore,
          aguarde.
        </p>
        <div style="margin: 20px auto; border: 4px solid #f3f3f3; border-top: 4px solid #17a2b8; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite;"></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  // Count modifications and populate all lines
  let additions = 0
  let deletions = 0

  const processedLines: {
    type: 'added' | 'removed' | 'unchanged'
    text: string
  }[] = []

  for (const part of store.diffLinesResult) {
    const lines = part.value.split('\n')
    // Remove trailing empty line from split
    if (lines.length > 1 && lines[lines.length - 1] === '') {
      lines.pop()
    }

    for (const line of lines) {
      if (part.added) {
        additions++
        processedLines.push({ type: 'added', text: line })
      } else if (part.removed) {
        deletions++
        processedLines.push({ type: 'removed', text: line })
      } else {
        processedLines.push({ type: 'unchanged', text: line })
      }
    }
  }

  // Determine which lines should be visible (modified + 3 context lines around them)
  const contextSize = 3
  const total = processedLines.length
  const visible = new Set<number>()

  for (let i = 0; i < total; i++) {
    if (processedLines[i].type !== 'unchanged') {
      const start = Math.max(0, i - contextSize)
      const end = Math.min(total - 1, i + contextSize)
      for (let k = start; k <= end; k++) {
        visible.add(k)
      }
    }
  }

  const renderElements = []
  let skipping = false
  let skipCount = 0

  for (let i = 0; i < total; i++) {
    if (visible.has(i)) {
      if (skipping) {
        renderElements.push(
          <div
            key={`skip-${i}`}
            style="background: #161b22; color: #8b949e; padding: 6px 15px; font-family: sans-serif; font-size: 0.85em; border-top: 1px solid #21262d; border-bottom: 1px solid #21262d; user-select: none; text-align: center;"
          >
            ••• Omitidas {skipCount} linhas idênticas •••
          </div>,
        )
        skipping = false
        skipCount = 0
      }

      const line = processedLines[i]
      let bg = 'transparent'
      let color = '#c9d1d9'
      let prefix = ' '

      if (line.type === 'added') {
        bg = 'rgba(46, 160, 67, 0.15)'
        color = '#58a6ff'
        prefix = '+'
      } else if (line.type === 'removed') {
        bg = 'rgba(248, 81, 73, 0.15)'
        color = '#ff7b72'
        prefix = '-'
      }

      renderElements.push(
        <div
          key={i}
          style={{
            backgroundColor: bg,
            color: color,
            display: 'flex',
            whiteSpace: 'pre-wrap',
            padding: '1px 15px',
            fontFamily:
              'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
            lineHeight: '1.5',
          }}
        >
          <span style="width: 35px; color: #8b949e; user-select: none; display: inline-block; text-align: right; margin-right: 15px; font-size: 0.85em;">
            {i + 1}
          </span>
          <span style="width: 15px; color: #8b949e; user-select: none; display: inline-block; margin-right: 5px;">
            {prefix}
          </span>
          <span style="flex: 1;">{line.text}</span>
        </div>,
      )
    } else {
      skipping = true
      skipCount++
    }
  }

  if (skipping) {
    renderElements.push(
      <div
        key="skip-end"
        style="background: #161b22; color: #8b949e; padding: 6px 15px; font-family: sans-serif; font-size: 0.85em; border-top: 1px solid #21262d; user-select: none; text-align: center;"
      >
        ••• Omitidas {skipCount} linhas idênticas •••
      </div>,
    )
  }

  return (
    <div id="conteudo">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h4 style="color: #0f4098;">COMPARAÇÃO DE BASE DE DADOS</h4>
          <p style="color: #666; margin: 0;">
            Visualização das alterações preparadas em{' '}
            <strong>desenvolvimento</strong> em relação a{' '}
            <strong>produção</strong>.
          </p>
        </div>
        <button
          type="button"
          className="form-button"
          style="background: #0f4098; color: white; padding: 8px 16px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;"
          onClick={() => store.setView('catalogos')}
        >
          &larr; VOLTAR PARA CONFIGURAÇÕES
        </button>
      </div>

      <div style="display: flex; gap: 20px; margin-bottom: 20px;">
        <div style="background: #e6ffec; color: #24292e; padding: 10px 15px; border-radius: 6px; border: 1px solid #acf2bd; font-weight: bold;">
          + {additions} adições/alterações
        </div>
        <div style="background: #ffeef0; color: #24292e; padding: 10px 15px; border-radius: 6px; border: 1px solid #fdb8c0; font-weight: bold;">
          - {deletions} remoções
        </div>
      </div>

      <div
        style={{
          background: '#0d1117',
          color: '#c9d1d9',
          fontFamily: 'monospace',
          fontSize: '0.9em',
          borderRadius: '6px',
          border: '1px solid #30363d',
          overflow: 'hidden',
        }}
      >
        <div style="background: #161b22; padding: 10px; border-bottom: 1px solid #30363d; font-weight: bold; font-family: sans-serif; display: flex; justify-content: space-between; align-items: center; color: #c9d1d9;">
          <span>db_diff.json</span>
          <span style="font-size: 0.8em; color: #8b949e; background: #21262d; padding: 2px 8px; border-radius: 10px;">
            VISTA UNIFICADA (HUNKS)
          </span>
        </div>

        <div
          style={{
            maxHeight: '600px',
            overflowY: 'auto',
            padding: '10px 0',
          }}
        >
          {processedLines.length === 0 ? (
            <div style="padding: 20px; text-align: center; color: #8b949e; font-family: sans-serif;">
              Nenhuma alteração detectada. As bases de dados são idênticas.
            </div>
          ) : (
            renderElements
          )}
        </div>
      </div>
    </div>
  )
}
