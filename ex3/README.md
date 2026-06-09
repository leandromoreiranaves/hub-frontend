# User List App

## Descrição

Aplicação React responsável por consumir uma API pública e exibir informações dos usuários.

Os dados são obtidos da API JSONPlaceholder utilizando Axios e apresentados em uma lista contendo nome, email e empresa.

## Tecnologias Utilizadas

* React 18
* TypeScript
* Vite
* Tailwind CSS
* Axios

## API Utilizada

https://jsonplaceholder.typicode.com/users

## Funcionalidades

* Consumo de API utilizando Axios
* Exibição de usuários
* Exibição de email
* Exibição da empresa do usuário
* Estado de carregamento
* Tratamento de erros

## Conceitos Aplicados

* useEffect
* useState
* Axios
* Consumo de APIs REST
* Tratamento de erros

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
