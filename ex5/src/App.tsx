import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Dashboard de Pedidos
          </h1>

          <p className="text-slate-500 mt-2">
            Visão geral dos pedidos da plataforma
          </p>
        </div>

        <Dashboard />
      </div>
    </div>
  );
}

export default App;