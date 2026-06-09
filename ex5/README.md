# Dashboard

## Descrição

Mini dashboard desenvolvido em React para simular um cenário comum de integração com sistemas externos.

A aplicação consome dados de pedidos da Fake Store API e gera indicadores de negócio, incluindo total de pedidos, total de produtos vendidos, faturamento estimado e distribuição de pedidos por usuário.

## Tecnologias Utilizadas

* React 18
* TypeScript
* Vite
* Tailwind CSS
* Axios
* Recharts

## API Utilizada

https://fakestoreapi.com/carts

## Funcionalidades

* Consumo de pedidos da Fake Store API
* Dashboard de indicadores
* Total de pedidos
* Total de produtos vendidos
* Faturamento calculado com base em R$100 por produto
* Gráfico de pedidos por usuário
* Loading com spinner
* Tratamento de erros
* Hook customizado para obtenção dos pedidos
* Separação da lógica de negócio em utilitários

## Conceitos Aplicados

* useState
* useEffect
* useMemo
* Axios
* Componentização
* Hooks customizados
* Integração com APIs
* Visualização de dados com gráficos
* Regras de negócio

## Estrutura do Projeto

src/
├── components/
│   ├── Dashboard.tsx
│   ├── Loading.tsx
│   ├── OrdersChart.tsx
│   └── SummaryCards.tsx
├── hooks/
│   └── useOrders.ts
├── services/
│   └── api.ts
├── types/
│   └── Cart.ts
├── utils/
│   └── dashboard.ts
├── App.tsx
├── main.tsx
└── index.css

## Instalação

```bash
npm install
```

## Dependências Adicionais

```bash
npm install axios
npm install recharts
```

## Executando Localmente

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```
