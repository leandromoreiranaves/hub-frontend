# User Search App

## Descrição

Aplicação React que consome uma API pública e permite realizar buscas de usuários através de um campo de pesquisa.

A filtragem é realizada localmente utilizando busca case-insensitive.

## Tecnologias Utilizadas

* React 18
* TypeScript
* Vite
* Tailwind CSS
* Axios

## API Utilizada

https://jsonplaceholder.typicode.com/users

## Funcionalidades

* Consumo de API com Axios
* Busca por nome
* Filtro case-insensitive
* Input controlado
* Exibição de loading
* Tratamento de erro
* Mensagem para nenhum resultado encontrado

## Conceitos Aplicados

* useState
* useEffect
* Inputs controlados
* Filtragem de arrays
* Consumo de APIs

## Estrutura do Projeto

src/
├── components/
│   └── UserList.tsx
├── services/
│   └── api.ts
├── App.tsx
├── main.tsx
└── index.css

## Instalação

```bash
npm install
```

## Executando Localmente

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

## Build de Produção

```bash
npm run build
```
