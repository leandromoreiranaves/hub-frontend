type SummaryCardsProps = {
    totalOrders: number;
    totalRevenue: number;
  };
  
  export default function SummaryCards({
    totalOrders,
    totalRevenue,
  }: SummaryCardsProps) {
    return (
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <p className="text-slate-500 text-sm">
            Total de Pedidos
          </p>
  
          <h2 className="text-4xl font-bold text-indigo-600 mt-2">
            {totalOrders}
          </h2>
        </div>
  
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <p className="text-slate-500 text-sm">
            Faturamento Total
          </p>
  
          <h2 className="text-4xl font-bold text-emerald-600 mt-2">
            {totalRevenue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
        </div>
      </div>
    );
  }