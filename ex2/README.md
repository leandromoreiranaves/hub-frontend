# Product List App

## Descrição

Aplicação React responsável por renderizar uma lista de produtos recebida via props.

Cada produto possui identificador, nome e preço. Os valores são formatados para Real (R$) e uma mensagem é exibida quando não existem produtos disponíveis.

## Tecnologias Utilizadas

* React 18
* TypeScript
* Vite
* Tailwind CSS

## Funcionalidades

* Recebe produtos via props
* Exibe nome do produto
* Exibe preço formatado em Real (R$)
* Lista dinâmica utilizando map()
* Exibe mensagem quando a lista está vazia

## Conceitos Aplicados

* Props
* Tipagem com TypeScript
* Renderização de listas
* Renderização condicional

## Estrutura do Projeto

src/
├── components/
│   └── ProductList.tsx
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
