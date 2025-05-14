'use client'

import { useState, useEffect } from "react";

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
}

export default function Counter({ value, onChange }: CounterProps) {
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value);
  }, [value]);

  const handleIncrease = () => {
    onChange(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      onChange(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-5">
      <button
        onClick={handleDecrease}
        className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center text-2xl hover:bg-gray-200"
      >
        -
      </button>

      <span className="text-xl font-semibold text-gray-900">
        {count}
      </span>

      <button
        onClick={handleIncrease}
        className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-200 to-blue-300 text-white flex items-center justify-center text-2xl hover:bg-blue-600"
      >
        +
      </button>
    </div>
  );
}
