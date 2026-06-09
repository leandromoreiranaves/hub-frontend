import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full min-h-[340px] text-center">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Counter
      </h1>

      <div className="mb-8">
        <p className="text-7xl font-extrabold text-indigo-600">
          {count}
        </p>
      </div>

      <div className="flex justify-center gap-6">
        <button
          onClick={decrement}
          disabled={count === 0}
          className="
            w-14 h-14
            rounded-xl
            bg-red-500
            text-white
            text-2xl
            font-bold
            shadow-md
            transition-all
            duration-200
            hover:bg-red-600
            hover:scale-105
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:hover:scale-100
          "
        >
          −
        </button>

        <button
          onClick={increment}
          disabled={count === 10}
          className="
            w-14 h-14
            rounded-xl
            bg-green-500
            text-white
            text-2xl
            font-bold
            shadow-md
            transition-all
            duration-200
            hover:bg-green-600
            hover:scale-105
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:hover:scale-100
          "
        >
          +
        </button>
      </div>

      <div className="mt-6 h-12 flex items-center justify-center">
        <span
          className={`
            inline-block
            bg-orange-100
            text-orange-700
            px-4
            py-2
            rounded-full
            font-medium
            transition-opacity
            duration-300
            ${
              count === 10
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          Valor limite atingido!
        </span>
      </div>
    </div>
  );
}