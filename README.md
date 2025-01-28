# Serverest

Este documento fornece as informações básicas para executar um projeto Cypress. Certifique-se de seguir os passos abaixo para configurar e rodar os testes com sucesso.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- NPM (Node Package Manager) ou Yarn
- Cypress instalado no projeto

## Passos para Configuração

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/BrnFtsz/serverest.git
   cd serverest
   ```

2. **Instale as Dependências**
   Execute o comando abaixo para instalar todas as dependências do projeto:
   ```bash
   npm install
   ```
   ou, se estiver usando Yarn:
   ```bash
   yarn install
   ```

3. **Verifique a Instalação do Cypress**
   Caso o Cypress ainda não esteja instalado, você pode adicioná-lo ao projeto com:
   ```bash
   npm install cypress --save-dev
   ```
   ou, com Yarn:
   ```bash
   yarn add cypress --dev
   ```

## Executando os Testes

1. **Abrir o Cypress Test Runner**
   Para abrir a interface do Cypress e selecionar os testes manualmente:
   ```bash
   npx cypress open
   ```
   ou, com Yarn:
   ```bash
   yarn cypress open
   ```

2. **Executar os Testes em Linha de Comando**
   Para rodar os testes diretamente no terminal:
   ```bash
   npx cypress run
   ```
   ou, com Yarn:
   ```bash
   yarn cypress run
   ```

## Estrutura do Projeto

O projeto geralmente segue a seguinte estrutura:

```
project-root/
├── cypress/
│   ├── tests/              # Testes End-to-End e API
│   ├── fixtures/           # Dados fictícios para os testes
│   ├── support/            # Comandos customizados e configurações
│   └── downloads/          # Arquivos baixados pelos testes
├── cypress.config.js       # Configurações do Cypress
├── package.json            # Dependências e scripts do projeto
└── README.md               # Instruções do projeto
```

## Configurações Adicionais

- **Alterar Configurações do Cypress:** Edite o arquivo `cypress.config.js` para modificar as configurações padrão, como o tempo limite de requisições ou a URL base.

- **Criar Comandos Customizados:** Utilize o arquivo `cypress/support/commands.js` para adicionar comandos reutilizáveis.

## Dúvidas ou Problemas

Em caso de dúvidas ou problemas, consulte a [documentação oficial do Cypress](https://docs.cypress.io) ou entre em contato com o responsável pelo projeto.

---

Happy Testing! 🚀
