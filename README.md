## Descrição
Esta aplicação permite o gerenciamento de campanhas, oferecendo funcionalidades como criação, visualização de detalhes e atualização de campanhas.

## Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

### Execução
##Ambiente de Desenvolvimento
Para rodar a aplicação em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```
A aplicação estará disponível em `http://localhost:3000`.

## Build para Produção
Para construir a aplicação para produção:
```bash
npm run build
# ou
yarn build
```
Para iniciar a aplicação em modo de produção:
```bash
npm start
# ou
yarn start
```
## Servidor JSON
Para iniciar o servidor JSON:
```bash
npm run json-server
# ou
yarn json-server
```
O servidor JSON estará disponível em `http://localhost:3001`

## Testes
```bash
npm test
# ou
yarn test
```

## Estrutura do Projeto
O projeto está organizado da seguinte forma:
```bash 
DB
src
├── app
│ ├── api
│ ├── campaigns
│ │ ├── new
│ │ ├── [id]
│ │ ├── details
│ ├── common
│ ├── enums
│ ├── interface
│ ├── utils
```
## Tecnologias Utilizadas
- Next.js: Framework React para desenvolvimento web.
- TypeScript: Linguagem de programação que é um superconjunto de JavaScript.
- Tailwind CSS: Framework CSS para estilização.
- React Hook Forms: Biblioteca para criação de formulários em React.
- JSON Server: Ferramenta para criar um servidor REST simulado utilizando um arquivo JSON.
- Day.js: Biblioteca para manipulação de datas.
- Ant Design Icons: Conjunto de ícones para uso com React.
- React Hot Toast: Biblioteca para exibição de notificações.
- Testing Library: Conjunto de ferramentas para teste de interfaces de usuário.
- Jest: Framework de testes em JavaScript.
