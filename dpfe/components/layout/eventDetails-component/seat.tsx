// components/Seat.tsx
export default function Seat({ seat, onSelect, isSelected }: any) {
    const bgColor = seat.type === "VIP" ? "bg-yellow-400" : "bg-gray-300";
  
    return (
      <button
        className={`w-10 h-10 m-1 rounded ${bgColor} ${isSelected ? 'border-4 border-blue-500' : ''}`}
        onClick={() => onSelect(seat)}
      >
        {seat.id}
      </button>
    );
  }
  