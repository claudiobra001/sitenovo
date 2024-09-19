import React from 'react';
import { Trash2, ShoppingBag } from 'lucide-react';

const Cart = ({ items, onRemoveItem, onFinishOrder }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-brown-800">Carrinho</h2>
        <ShoppingBag className="w-6 h-6 text-amber-600" />
      </div>
      {items.length === 0 ? (
        <p className="text-brown-600 text-center py-4">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-4 max-h-80 overflow-y-auto">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-amber-50 p-3 rounded-lg">
                <div>
                  <h3 className="font-semibold text-brown-800">{item.name}</h3>
                  <p className="text-brown-600">R$ {item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => onRemoveItem(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-amber-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-brown-800">Total:</span>
              <span className="text-lg font-bold text-amber-600">R$ {total.toFixed(2)}</span>
            </div>
            <button 
              onClick={onFinishOrder}
              className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition-colors font-semibold"
            >
              Finalizar Pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
