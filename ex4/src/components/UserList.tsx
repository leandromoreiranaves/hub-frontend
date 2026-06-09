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
  const [search, setSearch] = useState("");
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

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

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

        <p className="text-slate-500 mt-2">
          Consulte e filtre usuários cadastrados na plataforma.
        </p>
      </div>

      <div className="relative mb-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar usuário..."
          className="
            w-full
            p-4
            rounded-xl
            border
            border-slate-300
            bg-white
            shadow-sm
            text-slate-700
            placeholder:text-slate-400
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:border-indigo-500
            transition
          "
        />
      </div>

      <ul className="grid gap-4">
        {filteredUsers.map((user) => (
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

      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          Nenhum usuário encontrado.
        </p>
      )}
    </div>
  );
}