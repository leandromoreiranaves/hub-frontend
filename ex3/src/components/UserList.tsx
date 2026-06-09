import { useEffect, useState } from "react";
import { api } from "../services/api";
import Loading from "./Loading";

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await api.get<User[]>("/users");
        setUsers(response.data);
      } catch {
        setError("Erro ao carregar usuários.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 font-semibold">
        {error}
      </p>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Filtro de Usuários
        </h1>
      </div>

      <ul className="grid gap-4">
        {users.map((user) => (
          <li className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition">
            <h2 className="text-lg font-bold text-slate-800 mb-2">
              {user.name}
            </h2>
          
            <p className="text-slate-600 mb-1">
              📧 {user.email}
            </p>
          
            <p className="text-slate-500">
              🏢 {user.company.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}