Especificação para Refatoração do Sistema CEFiTI

1.0 Introdução e Visão Geral do Sistema

O Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual (CEFiTI) é uma ferramenta digital de importância estratégica para a defesa sanitária vegetal no Brasil. Sua função é consolidar e fornecer acesso rápido à legislação vigente que rege o transporte de plantas, seus produtos e subprodutos entre as unidades federativas do país. Este documento serve como a especificação técnica detalhada para um projeto de refatoração do código-fonte do sistema, utilizando como base a arquitetura e as funcionalidades existentes que se provaram eficazes.

Desenvolvido para apoiar produtores, fiscais agropecuários e transportadores, o CEFiTI funciona como um sistema de consulta centralizado. Ele traduz a complexa rede de normas fitossanitárias em respostas claras e diretas, ajudando a prevenir a disseminação de pragas regulamentadas que representam risco para a agricultura nacional. Conforme detalhado em manuais do Ministério da Agricultura (MAPA) e de órgãos estaduais como o INDEA-MT, o sistema é a referência oficial para determinar se uma partida de vegetais requer documentos como a Permissão de Trânsito de Vegetais (PTV) ou o Certificado Fitossanitário de Origem (CFO).

O objetivo principal deste documento é mapear e especificar a arquitetura, a estrutura da base de dados, os principais casos de uso e a plataforma de desenvolvimento do sistema em seu estado atual. Este levantamento servirá como guia fundamental para o processo de refatoração, que utilizará as ferramentas **Antigravity e Gimini CLI** para modernizar a base de código e otimizar a manutenção futura. A análise a seguir começa por desconstruir a arquitetura atual do software.

2.0 Arquitetura do Sistema Atual

Compreender a arquitetura de software existente é o ponto de partida para qualquer projeto de refatoração bem-sucedido. A estrutura atual do CEFiTI, embora funcional e robusta, foi construída com tecnologias que evoluíram ao longo do tempo. O projeto de refatoração buscará modernizar essa base, preservando a lógica de negócio que é o núcleo do sistema.

A arquitetura de alto nível do CEFiTI é caracterizada como um _Progressive Web App_ (PWA) que opera primariamente no lado do cliente. Essa abordagem permite que o sistema seja "instalável" em dispositivos e funcione de forma offline, uma característica crucial para usuários que podem precisar de acesso em campo, onde a conectividade é limitada ou inexistente. A arquitetura é composta por três componentes principais que trabalham de forma integrada.

• **Base de Dados (****db.js****)**: O sistema emprega uma abordagem de banco de dados não tradicional. Em vez de um servidor de banco de dados, os dados — que consistem nas regras fitossanitárias, pragas e hospedeiros — são armazenados diretamente em arquivos JavaScript. Conforme o histórico de versões do projeto, a base foi posteriormente separada em arquivos distintos para modularizar as informações, facilitar a manutenção e evitar a repetição de dados.

• **Lógica do Sistema (****store.ts****)**: Este componente é o coração da aplicação, responsável pela lógica de negócios e pelo gerenciamento de estado. A evolução do sistema mostra uma clara busca por performance e simplicidade no gerenciamento de estado. O projeto migrou inicialmente de Mobx para Valtio e, mais recentemente, adotou uma abordagem baseada em sinais reativos com Preact/Signals e `deepsignal`, que oferecem atualizações granulares e eficientes da interface do usuário.

• **Interface do Usuário (****form.tsx****)**: Sendo o ponto central de interação, este componente define a experiência do usuário. O projeto evoluiu da biblioteca React para Preact, uma alternativa mais leve e performática. Além disso, o layout do formulário de consulta foi refatorado, substituindo uma estrutura baseada em tabelas HTML por Flexbox, o que resultou em melhorias significativas de performance, acessibilidade e responsividade em diferentes dispositivos.

Essa arquitetura desacoplada e focada no cliente é a base sobre a qual as funcionalidades do sistema são construídas. A seguir, detalharemos a estrutura específica da base de dados que alimenta a lógica do sistema.

3.0 Especificação da Base de Dados

A estrutura de dados do CEFiTI é um dos pilares do sistema. Em vez de um banco de dados relacional convencional, o sistema utiliza uma série de arquivos de texto estruturados que contêm as regras fitossanitárias. Compreender a organização e o formato desses dados é vital para garantir que a lógica de negócio seja preservada e otimizada durante a refatoração.

Com o objetivo de simplificar a manutenção e evitar a redundância de informações, a base de dados foi normalizada e segmentada em três arquivos principais, conforme implementado na versão 4.0-17:

• **Pragas**: Arquivo que lista todas as pragas regulamentadas.

• **Hospedeiros**: Arquivo que cataloga as espécies vegetais que podem hospedar as pragas.

• **Regras**: Arquivo central que conecta pragas, hospedeiros, partes de plantas, origem, destino e as exigências legais correspondentes.

A estrutura de um registro de regra é padronizada para garantir a consistência e a correta interpretação pelo sistema. Cada regra é um objeto com os seguintes campos:

| Campo | Descrição |
| --- | --- |
| `desc` | Uma descrição textual da regra para identificação e manutenção. |
| `hosp[]` | Array de hospedeiros (plantas) aos quais a regra se aplica. |
| `part[]` | Array de partes da planta (ex: "frutos", "mudas", "estacas") às quais a regra se aplica. |
| `orig[]` | Array de Unidades da Federação (UFs) de origem para as quais a regra é válida. |
| `dest[]` | Array de Unidades da Federação (UFs) de destino para as quais a regra é válida. |
| `prag` | Código ou nome da praga principal relacionada à regra. |
| `pragc` | Nome científico da praga (inferido, para complementar o código `prag`). |
| `exig[]` | Array com as exigências fitossanitárias (ex: "PTV", "CFO", "Trânsito Proibido", "Sem Exigências"). |
| `leg` | Referência à legislação base que fundamenta a regra (ex: "IN 28/2016"). |
| `link` | URL para o documento oficial da legislação. |

Para garantir a integridade da base de dados durante a edição manual, foram estabelecidas as seguintes convenções, extraídas diretamente do código-fonte:

1\. Toda aspa dupla (`"`) dentro de um texto deve ser precedida de uma barra invertida (Ex.: `texto \"texto\" texto`).

2\. Para inserir uma quebra de linha dentro de um item, deve-se usar `\n`.

3\. Uma lista de itens (array) é definida colocando-se os itens entre colchetes (Ex.: `["a", "b", "c"]`).

4\. Os itens da lista devem estar entre aspas duplas (`"`) e separados por vírgula.

5\. Cada regra deve conter os campos: `desc`, `hosp[]`, `part[]`, `orig[]`, `dest[]`, `prag`, `pragc`, `exig[]`, `leg`, `link`.

6\. Cada campo da regra deve ser seguido pela sua definição após dois pontos (`:`), e os campos devem ser separados por vírgula.

7\. Cada regra deve ter seus campos agrupados dentro de chaves (`{...}`) e ser separada de outras regras por uma vírgula.

Essa estrutura de dados bem definida é o que permite ao sistema executar suas operações fundamentais, que são descritas a seguir como casos de uso.

4.0 Casos de Uso do Sistema

Os casos de uso definem o escopo funcional de um sistema, descrevendo as interações entre os usuários e o software para atingir um objetivo específico. As interações a seguir representam as funcionalidades primárias do CEFiTI, as quais o projeto de refatoração deve não apenas preservar, mas também otimizar em termos de performance e experiência do usuário.

4.1 Consulta de Exigências Fitossanitárias

• **Ator:** Usuário (Produtor, Fiscal Agropecuário, Transportador).

• **Descrição:** Este é o principal fluxo de interação do sistema, permitindo que um usuário determine os requisitos para o transporte de um produto vegetal.

    1. O usuário inicia a consulta informando o nome da espécie vegetal, seja pelo nome vulgar ou científico.    2. Em seguida, o usuário especifica a parte da planta que será transportada (ex: frutos, sementes, mudas).    3. O usuário seleciona o Estado de Origem da carga.    4. O usuário seleciona o Estado de Destino da carga.    5. O sistema processa as entradas, cruzando as informações com a base de dados de regras para encontrar as correspondências.    6. Finalmente, o sistema exibe de forma clara as exigências fitossanitárias aplicáveis, como a necessidade de PTV, CFO, ou se o trânsito é livre. A resposta inclui links diretos para a legislação pertinente, fornecendo a base legal para a exigência.

4.2 Atualização da Base de Regras

• **Ator:** Administrador do Sistema / Mantenedor.

• **Descrição:** Com base no histórico de atualizações do repositório, o processo de manutenção pode ser inferido da seguinte forma:

    1. Em resposta a novas legislações ou alterações no status fitossanitário das UFs, o administrador edita diretamente os arquivos da base de dados (`Pragas`, `Hospedeiros` e `Regras`), seguindo as convenções de formatação estabelecidas.    2. Após a edição e validação dos dados, o administrador implanta uma nova versão do aplicativo, disponibilizando as regras atualizadas para todos os usuários.

A execução eficiente desses casos de uso é diretamente dependente do ecossistema tecnológico sobre o qual o sistema é construído, detalhado na seção a seguir.

5.0 Plataforma de Desenvolvimento e Ferramentas

A escolha da plataforma de desenvolvimento e das ferramentas associadas é um fator determinante para a qualidade, manutenibilidade e desempenho de um software. Esta seção cataloga o ecossistema tecnológico atual do CEFiTI, que reflete uma preferência por ferramentas modernas, performáticas e que promovem a qualidade do código.

5.1 Linguagens e Frameworks

• **TypeScript/JavaScript:** São as linguagens primárias utilizadas no desenvolvimento do front-end e da lógica do sistema.

• **Preact:** Uma biblioteca de interface de usuário (UI) leve e rápida, que foi adotada em substituição ao React para obter melhor performance, especialmente em dispositivos com menor poder de processamento.

• **@preact/signals & deepsignal:** Utilizados para o gerenciamento de estado reativo, permitindo atualizações eficientes e granulares da UI sem a complexidade de outras bibliotecas de estado.

• **HTML5 & CSS3:** Utilizados para a estruturação semântica e a estilização da interface do usuário.

5.2 Ferramentas de Build e Qualidade de Código

• **esbuild:** Um compilador e empacotador (_bundler_) de alta performance, escrito em Go, que acelera significativamente o tempo de build do projeto.

• **ESLint:** Ferramenta de _linting_ para análise estática de código, garantindo a adesão a padrões de codificação e a detecção precoce de erros.

• **Prettier:** Um formatador de código opinativo que garante um estilo de código consistente em todo o projeto, eliminando debates sobre formatação.

• **source-map-explorer:** Ferramenta utilizada para analisar o tamanho dos _bundles_ gerados, ajudando a identificar e otimizar pacotes que impactam o tempo de carregamento da aplicação.

5.3 Ambiente e Licenciamento

• **Node.js:** Ambiente de execução para as ferramentas de desenvolvimento, scripts de build e gerenciamento de dependências.

• **Git / GitHub:** O sistema de controle de versão distribuído e a plataforma de hospedagem do repositório, respectivamente, que permitem o trabalho colaborativo e o rastreamento do histórico de alterações.

• **Licença:** O projeto é distribuído sob a **MIT License**, uma licença de software livre permissiva.

Essas ferramentas não apenas definem o ambiente de desenvolvimento, mas também influenciam e ajudam a reforçar o estilo de programação adotado no projeto.

6.0 Estilo de Programação e Convenções

Um estilo de programação consistente é fundamental para a colaboração em equipe, a legibilidade do código e a manutenibilidade a longo prazo de um projeto de software. Embora não haja um guia de estilo formalmente documentado para o CEFiTI, é possível inferir as convenções adotadas a partir do conjunto de ferramentas e tecnologias utilizadas.

• **Tipagem Estática:** O uso de TypeScript impõe a declaração explícita de tipos para variáveis, parâmetros de função e estruturas de dados. Essa prática aumenta a robustez do código, previne uma classe inteira de erros em tempo de desenvolvimento e melhora a experiência de desenvolvimento com autocompletar e análise estática.

• **Componentização e Reatividade:** A interface do usuário é construída seguindo o paradigma de componentização funcional, um padrão moderno popularizado pelo React e adotado pelo Preact. O estado da aplicação é gerenciado de forma reativa e granular com _Signals_, o que simplifica o fluxo de dados e otimiza as renderizações.

• **Código Limpo e Padronizado:** A combinação das ferramentas ESLint e Prettier automatiza a conformidade com regras de qualidade e um padrão de formatação unificado. Isso garante que todo o código-fonte siga as mesmas convenções de estilo, desde o espaçamento e quebras de linha até a sintaxe preferencial, tornando-o mais limpo e fácil de ler.

• **Manutenibilidade da Base de Dados:** A convenção de separar os dados em arquivos distintos (Pragas, Hospedeiros, Regras) e a padronização rigorosa da estrutura dos objetos de regra (descrita na Seção 3.0) são cruciais. Elas garantem que a base do sistema, que é seu ativo mais importante, possa ser mantida e atualizada com segurança e eficiência.

Estas especificações técnicas fornecem um panorama completo do sistema CEFiTI e servirão como guia para o processo de refatoração. O objetivo é garantir a preservação da lógica de negócio essencial e das funcionalidades validadas pelos usuários, ao mesmo tempo em que se moderniza a base de código para os desafios futuros de manutenção e evolução.