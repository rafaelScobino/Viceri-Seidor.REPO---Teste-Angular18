
🧩 Integração entre MFEs

A comunicação entre os MFEs é feita via Module Federation, permitindo:
Compartilhamento dinâmico de componentes
Carregamento remoto e lazyload de rotas de cada MFE 

Repos próprios para cada MFE, onde podem ser consultados de maneira individual e seu historico de versionamento git
🏠 host-shell	4200	https://github.com/rafaelScobino/ViceriDesafio-Shell.HOST-Repo

🏡 mfe-home	4201	https://github.com/rafaelScobino/ViceriDesafio-MFE.HOME-Repo

👥 mfe-pessoas	4202	https://github.com/rafaelScobino/ViceriDesafio-MFE.PESSOAS-Repo

🗓️ mfe-agenda	4203	 https://github.com/rafaelScobino/ViceriDesafio-MFE.AGENDA-Repo

💳 mfe-planos	4204	https://github.com/rafaelScobino/ViceriDesafio-MFE.PLANO-Repo

⚙️ mfe-shared	4300	https://github.com/rafaelScobino/ViceriDesafio-MFE.SHARED-Repo

🎨 UI & Estilos
PrimeNG: Componentes de UI (com tema Aura)
TailwindCSS: Utilizado para layout e responsividade
PrimeIcons: Ícones oficiais do PrimeNG

🌐 Deploy
Com objetivo de testar um Deploy e verificar integração de mfes via web, foram gerados builds de cada mfe para subir em gitHub pages especificos, o host shell pode ser consultado em:
https://rafaelscobino.github.io/VS-Test.HOST/

Descrição de MFES

🧩 host-shell

Função principal:
O host-shell atua como o container principal (ou host) da arquitetura de Micro Frontends.
Ele é responsável por carregar dinamicamente os outros MFEs (como mfe-home, mfe-agenda, mfe-planos, mfe-pessoas) via Module Federation.

Responsabilidades técnicas:

Define o Module Federation configuration como host, importando os MFEs remotos.

Gerencia o roteamento global (Angular Router) e redireciona para as rotas expostas por cada MFE.

É o ponto de entrada da aplicação (geralmente acessado em http://localhost:4200).

🧩 mfe-home

Função principal:
O mfe-home é o micro frontend responsável pela página inicial do sistema.
Ele apresenta os componentes de Login e informações gerais e resumos de dados vindos de outros módulos, funcionando como o dashboard principal.

Responsabilidades técnicas:

Exibe cards e componentes de resumo 

Consome dados compartilhados (via storage) para renderizar informações do usuário ou contexto atual.

Inclui gráficos, listas e componentes visuais de acompanhamento.

🧩 mfe-agenda

Função principal:
O mfe-agenda é o micro frontend responsável pela gestão de eventos.
Ele fornece funcionalidades para visualizar e criar registros de agenda.

Responsabilidades técnicas:

Exibe a agenda semanal , permitindo interação com os eventos.

Implementa formulários de criação de eventos.

🧩 mfe-planos

Função principal:
O mfe-planos é o micro frontend responsável pelo gerenciamento de planos de ação.
Ele permite cadastrar e visualizar planos.

Responsabilidades técnicas:

Exibe listagens  de planos cadastrados.

Contém formulários para criação  de planos.

🧩 mfe-pessoas

Função principal:
O mfe-pessoas é o micro frontend responsável pelo cadastro e listagem de pessoas .
Ele centraliza as operações relacionadas à criação e listagem informações de pessoas dentro do sistema.

Responsabilidades técnicas:

Exibe listagens de pessoas cadastradas com filtros e paginação.

Fornece formulários de criação  de dados pessoais.

🧩 mfe-shared

Função principal:
O mfe-shared é o micro frontend dedicado a exportar componentes reutilizaveis.

Responsabilidades técnicas:

Contém componentes  genéricos

É importado por outros os MFEs conforme a necessidade, reduzindo redundância de código.


Guarda de Rotas:

Foram implementadas duas guardas de rotas de autenticação:
AuthGuard - host-shell -> Garante que um usuário deslogado não consiga acessar as rotas dos outros mfes
AuthGuard - mfe-home -> Garante que um usuário deslogado sejam automaticamente redirecionados para a tela de login

Testes unitários:

No serviço de gerenciamente de estado do mfe-agenda -agenda-shared.service- foi adidionado um teste unitário que visa garantir que o mfe consiga salvar os eventos registrados em storage para poder preencher corretamente a listagem de eventos no dashboard principal do projeto


# 🧩 Projeto MFE Unificado — Angular 18

**Autor:** Rafael Scobino da Costa Baltar

---

## 📘 Visão Geral

Este repositório contém uma arquitetura de **Micro Frontends (MFEs)** desenvolvida em Angular 18.

A estrutura é ideal para projetos modulares, onde cada domínio (*Agenda*, *Pessoas*, *Planos*, etc.) é desenvolvido e versionado separadamente, mantendo isolamento de dependências e builds.

---

# Descrição do Projeto
🏠 host-shell

Função principal:
Atua como o container principal da arquitetura de Micro Frontends, carregando dinamicamente outros MFEs via Module Federation.

Responsabilidades técnicas:

Define o Module Federation configuration como host.

Gerencia roteamento global (Angular Router).

Ponto de entrada da aplicação (http://localhost:4200).

🏡 mfe-home

Função principal:
Micro frontend responsável pela página inicial do sistema, exibindo login, resumos e dados de outros módulos.

Responsabilidades técnicas:

Exibe cards e dashboards.

Consome dados compartilhados (via storage).

Inclui gráficos, listas e componentes visuais.

🗓️ mfe-agenda

Função principal:
Micro frontend para gestão de eventos e agendas.

Responsabilidades técnicas:

Exibe agenda semanal.

Formulários para criação de eventos.

💳 mfe-planos

Função principal:
Micro frontend para gestão de planos de ação.

Responsabilidades técnicas:

Listagem de planos.

Formulários de criação e edição.

👥 mfe-pessoas

Função principal:
Micro frontend para cadastro e listagem de pessoas.

Responsabilidades técnicas:

Listagens com filtros e paginação.

Formulários de criação de pessoas.

⚙️ mfe-shared

Função principal:
Micro frontend dedicado a exportar componentes reutilizáveis.

Responsabilidades técnicas:

Componentes genéricos.

Importado por outros MFEs para reduzir redundância de código.

🛡️ Guarda de Rotas

AuthGuard - host-shell: Garante que usuários deslogados não acessem rotas dos outros MFEs.

AuthGuard - mfe-home: Redireciona usuários não autenticados para a tela de login.

🧪 Testes Unitários

No serviço de gerenciamento de estado do mfe-agenda (agenda-shared.service) foi adicionado teste unitário garantindo que o MFE consiga salvar eventos em storage e preencher corretamente a listagem de eventos do dashboard.


---


## 🏗️ Estrutura de Pastas

📦 projeto-mfe-unificado/
│
├── package.json # Scripts e comandos centrais
│
├── host-shell/ # Aplicação principal (container)
├── mfe-home/ # MFE de página inicial
├── mfe-pessoas/ # MFE de cadastro/listagem de pessoas
├── mfe-agenda/ # MFE de agenda e eventos
├── mfe-planos/ # MFE de cadastro/listagem de planos de ação
└── mfe-shared/ # MFE de componentes compartilhados


---

## ⚙️ Pré-requisitos

- **Node.js:** >= 20.x  
- **npm:** >= 10.x  
- **Angular CLI:** >= 18.x  

---

## 🚀 Instalação e Execução

1. Na raiz do projeto, instale dependências centrais:   npm install
2. Para instalar dependências de todos os MFEs simultaneamente: npm run install-all
  Esse comando executa, em série:
    npm install em host-shell
    npm install em mfe-home
    npm install em mfe-pessoas
    npm install em mfe-agenda
    npm install em mfe-planos
    npm install em mfe-shared

3.Para instalar dependências individualmente: Ex: cd mfe-home -> npm install


🚧 Execução (Modo Desenvolvimento)

1. Para rodar todos os MFEs simultaneamente: npm run serve-all

| Aplicação      | Porta | URL                                            |
| -------------- | ----- | ---------------------------------------------- |
| 🏠 host-shell  | 4200  | [http://localhost:4200](http://localhost:4200) |
| 🏡 mfe-home    | 4201  | [http://localhost:4201](http://localhost:4201) |
| 👥 mfe-pessoas | 4202  | [http://localhost:4202](http://localhost:4202) |
| 🗓️ mfe-agenda | 4203  | [http://localhost:4203](http://localhost:4203) |
| 💳 mfe-planos  | 4204  | [http://localhost:4204](http://localhost:4204) |
| ⚙️ mfe-shared  | 4300  | [http://localhost:4300](http://localhost:4300) |

📌 Comandos Individuais
npm run serve:host-shell
npm run serve:mfe-home
npm run serve:mfe-pessoas
npm run serve:mfe-agenda
npm run serve:mfe-planos
npm run serve:mfe-shared

### Acessar: **http://localhost:4200/** para navegar até o host da aplicação

## 🧩 Integração entre MFEs
A comunicação entre os MFEs é feita via Module Federation, permitindo:
Compartilhamento dinâmico de componentes.
Carregamento remoto e lazyload de rotas de cada MFE.

Repositórios próprios para cada MFE, com histórico individual de versionamento:

| Aplicação      | Porta | Repositório                                                               |
| -------------- | ----- | ------------------------------------------------------------------------- |
| 🏠 host-shell  | 4200  | [GitHub](https://github.com/rafaelScobino/ViceriDesafio-Shell.HOST-Repo)  |
| 🏡 mfe-home    | 4201  | [GitHub](https://github.com/rafaelScobino/ViceriDesafio-MFE.HOME-Repo)    |
| 👥 mfe-pessoas | 4202  | [GitHub](https://github.com/rafaelScobino/ViceriDesafio-MFE.PESSOAS-Repo) |
| 🗓️ mfe-agenda | 4203  | [GitHub](https://github.com/rafaelScobino/ViceriDesafio-MFE.AGENDA-Repo)  |
| 💳 mfe-planos  | 4204  | [GitHub](https://github.com/rafaelScobino/ViceriDesafio-MFE.PLANO-Repo)   |
| ⚙️ mfe-shared  | 4300  | [GitHub](https://github.com/rafaelScobino/ViceriDesafio-MFE.SHARED-Repo)  |

## 🎨 UI & Estilos

PrimeNG: Componentes de UI (tema Aura).

TailwindCSS: Layout e responsividade.

PrimeIcons: Ícones oficiais do PrimeNG.


## 🌐 Deploy

Para testes de deploy e integração de MFEs via web, foram gerados builds de cada MFE para GitHub Pages.
O host-shell pode ser consultado em:
https://rafaelscobino.github.io/VS-Test.HOST/

📅 Roadmap de Melhorias para Projeto MFE Unificado
1. Testes Automatizados (Qualidade de Código)

Objetivo: Garantir estabilidade, evitar regressões e aumentar cobertura do código.

Cobertura de testes unitários (Unit Tests)

Criar testes unitários para todos os serviços principais (agenda-shared.service, serviços de autenticação, serviços de API).


Testes de integração (Integration Tests)

Verificar fluxo completo de criação → leitura → edição → deleção (CRUD).

Criar cenários principais:

Login e acesso a MFEs protegidos.

Criação de evento na agenda.

Cadastro de pessoa.

Associação de pessoa a plano.

Verificação do dashboard (mfe-home).

2. Melhorias em Guarda de Rotas

Objetivo: Aumentar segurança, melhorar UX e padronizar navegação.

AuthGuard melhorado

Validação centralizada de sessão/autenticação.

Redirecionamento inteligente (ex.: manter rota inicial após login).

Mensagens de erro ou notificação ao usuário quando acesso negado.

RoleGuard (Controle por permissões)

Criar guarda para diferenciar acessos (ex.: administrador, colaborador, visitante).

Uso em rotas críticas (ex.: edição de planos, gerenciamento de pessoas).

Guarda de formulário incompleto

Impedir navegação caso haja formulário incompleto ou alterações não salvas.

3. Validação de Formulários

Objetivo: Garantir integridade de dados e UX melhorada.

Usar Reactive Forms com validações personalizadas.

Criar validators reutilizáveis no mfe-shared:

Validação de e-mail, CPF/CNPJ, telefone.

Validação de datas (ex.: datas futuras, horários válidos).

Validação de campos obrigatórios e padrões.

Mostrar mensagens claras de erro no frontend.

Suporte a validações assíncronas (ex.: verificação se CPF já existe).








