'use client';

import { useState } from 'react';

const locations = [
  {
    id: 1,
    name: "Outdoor Stage",
    hasHall: false,
    rows: 5,
    columns: 8,
    seatTypes: [
      { rows: ["A", "B"], type: "VIP", price: 30000, color: "bg-yellow-400" },
      { rows: ["C"], type: "Standard", price: 20000, color: "bg-green-300" },
      { rows: ["D", "E"], type: "Economy", price: 15000, color: "bg-blue-200" },
    ],
  },
  {
    id: 2,
    name: "City Theater",
    hasHall: true,
    rows: 0,
    columns: 0,
    seatTypes: [],
  },
];

export default function SelectLocation() {
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const selectedLocation = locations.find((loc) => loc.id === selectedLocationId);

  const toggleSeat = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const getSeatType = (rowChar: string, location: any) => {
    return location.seatTypes.find((type: any) => type.rows.includes(rowChar));
  };

  const calculateTotal = () => {
    if (!selectedLocation) return 0;
    return selectedSeats.reduce((sum, seatId) => {
      const row = seatId[0];
      const seatType = getSeatType(row, selectedLocation);
      return sum + (seatType?.price || 0);
    }, 0);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Газраа сонгоно уу:</h2>

      <select
        onChange={(e) => {
          setSelectedLocationId(Number(e.target.value));
          setSelectedSeats([]);
        }}
        className="border p-2 rounded w-full"
        defaultValue=""
      >
        <option value="" disabled>-- Сонгох --</option>
        {locations.map((loc) => (
          <option key={loc.id} value={loc.id}>
            {loc.name}
          </option>
        ))}
      </select>

      {selectedLocation && !selectedLocation.hasHall && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-2">Суудлын байрлал:</h3>
          <div
            className="grid gap-2 bg-gray-100 p-4 rounded"
            style={{
              gridTemplateColumns: `repeat(${selectedLocation.columns}, minmax(30px, 1fr))`,
            }}
          >
            {Array.from({ length: selectedLocation.rows * selectedLocation.columns }).map((_, index) => {
              const row = String.fromCharCode(65 + Math.floor(index / selectedLocation.columns));
              const seatNum = (index % selectedLocation.columns) + 1;
              const seatId = `${row}${seatNum}`;
              const isSelected = selectedSeats.includes(seatId);
              const seatType = getSeatType(row, selectedLocation);

              return (
                <div
                  key={seatId}
                  onClick={() => toggleSeat(seatId)}
                  className={`rounded text-center py-2 text-sm font-semibold cursor-pointer select-none
                    ${isSelected ? "bg-blue-500 text-white" : seatType?.color || "bg-gray-300"}
                  `}
                  title={`${seatId} — ${seatType?.type || "Unknown"} (${seatType?.price?.toLocaleString()}₮)`}
                >
                  {seatId}
                </div>
              );
            })}
          </div>

          <div className="mt-4">
            <p className="font-medium">Сонгосон суудал(ууд):</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {selectedSeats.length === 0 ? (
                <span className="italic text-gray-500">Хоосон</span>
              ) : (
                selectedSeats.map((seatId) => {
                  const row = seatId[0];
                  const seatType = getSeatType(row, selectedLocation);
                  return (
                    <span key={seatId} className="bg-blue-100 px-3 py-1 rounded shadow-sm text-sm">
                      {seatId} — {seatType?.type} ({seatType?.price?.toLocaleString()}₮)
                    </span>
                  );
                })
              )}
            </div>

            <div className="mt-3 text-right font-semibold">
              Нийт: {calculateTotal().toLocaleString()}₮
            </div>
          </div>
        </div>
      )}

      {selectedLocation && selectedLocation.hasHall && (
        <p className="mt-6 italic text-gray-600">Энэ газар танхимтай тул суудал харуулахгүй.</p>
      )}
    </div>
  );
}
