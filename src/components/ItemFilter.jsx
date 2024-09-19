import React, { useState, useEffect } from 'react';
import { Search, Coffee, Cake, Sandwich } from 'lucide-react';
import { Input } from "@/components/ui/input";

const menuItems = [
  { id: 1, name: 'Café Expresso', price: 3.5, category: 'bebidas', icon: Coffee },
  { id: 2, name: 'Cappuccino', price: 4.5, category: 'bebidas', icon: Coffee },
  { id: 3, name: 'Bolo de Chocolate', price: 5.0, category: 'doces', icon: Cake },
  { id: 4, name: 'Croissant', price: 3.0, category: 'salgados', icon: Sandwich },
  { id: 5, name: 'Chá Verde', price: 3.0, category: 'bebidas', icon: Coffee },
  { id: 6, name: 'Sanduíche de Queijo', price: 6.0, category: 'salgados', icon: Sandwich },
  { id: 7, name: 'Torta de Morango', price: 4.5, category: 'doces', icon: Cake },
];

const ItemFilter = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(menuItems);

  useEffect(() => {
    const results = menuItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchTerm]);

  return (
    <div className="bg-amber-50 p-6 rounded-lg shadow-md">
      <div className="mb-6 relative">
        <Input
          type="text"
          placeholder="Buscar itens..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => {
          const ItemIcon = item.icon;
          return (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-2">
                <ItemIcon className="w-6 h-6 mr-2 text-amber-600" />
                <h3 className="font-semibold text-lg text-brown-800">{item.name}</h3>
              </div>
              <p className="text-brown-600 mb-3">R$ {item.price.toFixed(2)}</p>
              <button
                className="w-full bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
                onClick={() => onAddToCart(item)}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemFilter;
