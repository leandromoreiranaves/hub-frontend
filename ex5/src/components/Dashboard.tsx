import { useEffect, useMemo, useState } from "react";
import { api } from "../services/api";
import type { Cart } from "../types/Cart";
import SummaryCards from "./SummaryCards";
import OrdersChart from "./OrdersChart";
import Loading from "./Loading";

export default function Dashboard() {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const response = await api.get<Cart[]>("/carts");
        setCarts(response.data);
      } catch {
        setError("Erro ao carregar pedidos.");
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  const totalOrders = useMemo(() => {
    return carts.length;
  }, [carts]);

  const totalRevenue = useMemo(() => {
    const totalProducts = carts.reduce((acc, cart) => {
      return (
        acc +
        cart.products.reduce(
          (sum, product) => sum + product.quantity,
          0
        )
      );
    }, 0);

    return totalProducts * 100;
  }, [carts]);

  const ordersByUser = useMemo(() => {
    const grouped: Record<number, number> = {};

    carts.forEach((cart) => {
      grouped[cart.userId] =
        (grouped[cart.userId] || 0) + 1;
    });

    return Object.entries(grouped).map(
      ([userId, orders]) => ({
        userId: Number(userId),
        orders,
      })
    );
  }, [carts]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <SummaryCards
        totalOrders={totalOrders}
        totalRevenue={totalRevenue}
      />

      <OrdersChart data={ordersByUser} />
    </div>
  );
}