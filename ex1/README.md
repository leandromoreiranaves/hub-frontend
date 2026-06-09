# Counter App

## Descrição

Aplicação React desenvolvida para demonstrar gerenciamento de estado utilizando o hook `useState`.

O componente exibe um contador iniciado em 0, permitindo incrementar e decrementar o valor através de botões. Ao atingir o valor 10, uma mensagem de limite é exibida.

## Tecnologias Utilizadas

* React 18
* TypeScript
* Vite
* Tailwind CSS

## Funcionalidades

* Exibição do valor atual do contador
* Incremento do contador
* Decremento do contador
* Bloqueio para valores menores que 0
* Bloqueio para valores maiores que 10
* Exibição da mensagem "Valor limite atingido!"

## Conceitos Aplicados

* useState
* Eventos (onClick)
* Renderização condicional
* Componentização

## Estrutura do Projeto

src/
├── components/
│   └── Counter.tsx
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