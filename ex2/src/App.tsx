import ProductList from "./components/ProductList";

function App() {

  const produtos = [
    {
      id: 1,
      nome: "Notebook Gamer",
      preco: 3500,
    },
    {
      id: 2,
      nome: "Mouse Gamer RGB",
      preco: 120,
    },
    {
      id: 3,
      nome: "Teclado Mecânico",
      preco: 250,
    },
    {
      id: 4,
      nome: "Headset Gamer",
      preco: 420,
    },
    {
      id: 5,
      nome: "Monitor 27 Polegadas",
      preco: 1450,
    },
    {
      id: 6,
      nome: "SSD NVMe 1TB",
      preco: 590,
    },
    {
      id: 7,
      nome: "HD Externo 2TB",
      preco: 480,
    },
    {
      id: 8,
      nome: "Webcam Full HD",
      preco: 320,
    },
    {
      id: 9,
      nome: "Microfone USB",
      preco: 390,
    },
    {
      id: 10,
      nome: "Caixa de Som Bluetooth",
      preco: 290,
    },
    {
      id: 11,
      nome: "Impressora Wi-Fi",
      preco: 980,
    },
    {
      id: 12,
      nome: "Cadeira Gamer",
      preco: 1650,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 flex justify-center items-center p-8">
      <ProductList produtos={produtos} />
    </main>
  );
}

export default App;