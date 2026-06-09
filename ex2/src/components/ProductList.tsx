type Product = {
  id: number;
  nome: string;
  preco: number;
};

type ProductListProps = {
  produtos: Product[];
};

export default function ProductList({
  produtos,
}: ProductListProps) {
  if (produtos.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-10 text-center shadow-md">
        <h2 className="text-2xl font-bold text-slate-700 mb-2">
          Lista de Produtos
        </h2>

        <p className="text-slate-500">
          Nenhum produto disponível.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">

      {/* Cabeçalho */}

      <div className="flex justify-between items-center border-b pb-5 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Lista de Produtos
          </h1>

          <p className="text-slate-500 mt-1">
            {produtos.length} produtos cadastrados
          </p>
        </div>
      </div>

      {/* Lista */}

      <ul className="space-y-4 max-h-[500px] overflow-y-auto pr-2">

        {produtos.map((produto) => (

          <li
            key={produto.id}
            className="
              flex
              justify-between
              items-center
              bg-slate-50
              rounded-xl
              p-5
              hover:bg-slate-100
              hover:shadow-md
              transition-all
              duration-300
            "
          >

            <div>

              <h2 className="text-xl font-semibold text-slate-800">
                {produto.nome}
              </h2>

              <p className="text-sm text-slate-500">
                Produto #{produto.id}
              </p>

            </div>

            <span className="text-xl font-bold text-green-600">

              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}

            </span>

          </li>

        ))}

      </ul>

    </div>
  );
}