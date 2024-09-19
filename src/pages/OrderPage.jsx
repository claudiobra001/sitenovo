import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ItemFilter from '../components/ItemFilter';
import Cart from '../components/Cart';
import { ArrowLeft } from 'lucide-react';
import { getOrderForTable, saveOrderForTable, removeOrderForTable } from '../utils/orderStorage';

const OrderPage = () => {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedOrder = getOrderForTable(tableId);
    setCartItems(savedOrder);
  }, [tableId]);

  const addToCart = (item) => {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
    saveOrderForTable(tableId, newCartItems);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    saveOrderForTable(tableId, newCartItems);
  };

  const handleFinishOrder = () => {
    removeOrderForTable(tableId);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-amber-50 p-4 sm:p-8">
      <Link to="/" className="flex items-center text-brown-600 hover:text-brown-800 mb-4">
        <ArrowLeft className="mr-2" />
        Voltar para seleção de mesas
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-brown-800">Pedido - Mesa {tableId}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <ItemFilter onAddToCart={addToCart} />
        </div>
        <div className="w-full lg:w-1/3">
          <Cart items={cartItems} onRemoveItem={removeFromCart} onFinishOrder={handleFinishOrder} />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
