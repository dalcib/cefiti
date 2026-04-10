# CEFiTI-Adim

Este aplicativo web tem por finalidade fazer a manutenção do banco de dados do CEFiTI.

O sistema deve permitir a:
- Inclusão de novas pragas
- Alteração de pragas (menos o nome científico)
- Inclusão de hospedeiros
- Alteração de hospedeiros
- Inclusão de novas legislações (as inclusões devem ser feitas de forma concomitante nas tabelas legislacao e leg_texto)
- Alteração de legislações (menos o id)
- Exclusão de legislações (as exclusões devem ser feitas de forma concomitante nas tabelas legislacao e leg_texto)
- Inclusão de regras (tabela rules)
- Alteração de regras (tabela rules)
- Exclusão de regras (tabela rules)
- Inclusão de status fitossanitário por município/estados (tabela status_municipios)
- Alteração de status fitossanitário por município/estados (tabela status_municipios)
- Exclusão de status fitossanitário por município/estados (tabela status_municipios)
- as tabelas estados e municipios são estáticas, ou seja, não devem ser alteradas
- Manutenção da lista de status fitossanitários em confuguracoes/catalogos/status_fitossanitario

Para a tabela status_municipios, a lista de municpios de cada status deve aparecer na forma de uma listbox, com uma listbox dos municipipos do estado selecionado para serem incluídos ou excluídos do status selecionado, com botões < e > para incluir e excluir os municípios selecionados. Os municípios selecionados devem aparecer em uma listbox separada.

O sistema deve ser desenvolvido utilizando Preact, TypeScript.

O sistema deve utilizar a biblioteca Signal e DeepSignal(cefiti-new library) em conjunto com o Firebase, da forma que for mais adequada, para o sistema ser simples e eficiente.

O sistema deve ser desenvolvido utilizando Firebase como banco de dados.

O sistema deve ser desenvolvido utilizando Firebase como autenticação.

O sistema deve ser desenvolvido utilizando Firebase como armazenamento.

O sistema deve ser desenvolvido utilizando Firebase como hospedagem.

O estilo da aplicação deve ser o mais próximo possível do estilo da aplicação original do CEFiTI.

O sistema deve ser responsivo, ou seja, deve funcionar em diferentes tamanhos de tela.


