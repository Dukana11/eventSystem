import Counter from '@/components/ui/counter';
import React from 'react';

interface TicketProps {
  name: string;
  price: number; // string биш шүү!
  quantity: number;
  onChange: (quantity: number) => void;
}

const TicketCard = ({ name, price, quantity, onChange }: TicketProps) => {
  return (
    <div className={`w-full h-32 p-3 rounded-md text-sm flex flex-col gap-5 font-medium text-gray-700 
      ${quantity > 0 ? 'border-blue-300' : 'border-gray-100'} border-2 transition-colors`}>
      
      <div className="flex justify-between">
        <p>{name}</p>
        <Counter value={quantity} onChange={onChange} />
      </div>

      <div className="w-full h-full border-t pt-2">
        {price.toLocaleString()}
        ₮
      </div>
    </div>
  );
};

export default TicketCard;
