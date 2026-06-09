import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  
  type ChartData = {
    userId: number;
    orders: number;
  };
  
  type OrdersChartProps = {
    data: ChartData[];
  };
  
  export default function OrdersChart({
    data,
  }: OrdersChartProps) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-1">
          Pedidos por Usuário
        </h2>
  
        <p className="text-slate-500 mb-6">
          Quantidade de pedidos agrupados por usuário
        </p>
  
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
            />
  
            <XAxis
              dataKey="userId"
              tick={{ fontSize: 14 }}
              label={{
                value: "Usuário",
                position: "insideBottom",
                offset: -10,
              }}
            />
  
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 14 }}
              label={{
                value: "Pedidos",
                angle: -90,
                position: "insideLeft",
              }}
            />
  
            <Tooltip
              labelFormatter={(label) =>
                `Usuário ${label}`
              }
              formatter={(value) => [
                `${value} pedido${Number(value) > 1 ? "s" : ""}`,
                "Quantidade",
              ]}
            />
  
            <Bar
              dataKey="orders"
              fill="#4f46e5"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }