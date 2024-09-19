import React from 'react';
import { CoffeeIcon, ShoppingCartIcon } from 'lucide-react';

const Table = ({ number, hasOrder }) => {
  return (
    <div className={`bg-gradient-to-br ${hasOrder ? 'from-green-200 to-green-100' : 'from-amber-200 to-amber-100'} rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 ${hasOrder ? 'border-green-300' : 'border-amber-300'}`}>
      <div className="mb-2 sm:mb-4 relative">
        <div className={`absolute inset-0 ${hasOrder ? 'bg-green-600' : 'bg-brown-600'} rounded-full opacity-10`}></div>
        {hasOrder ? (
          <ShoppingCartIcon className="w-12 h-12 sm:w-16 sm:h-16 text-green-800 mx-auto relative z-10" />
        ) : (
          <CoffeeIcon className="w-12 h-12 sm:w-16 sm:h-16 text-brown-800 mx-auto relative z-10" />
        )}
      </div>
      <span className="text-xl sm:text-3xl font-bold text-brown-900">Mesa {number}</span>
      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-brown-700">
        {hasOrder ? 'Pedido em andamento' : 'Toque para fazer pedido'}
      </div>
    </div>
  );
};

export default Table;
