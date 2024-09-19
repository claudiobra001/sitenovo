import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/Table';
import { getOrdersFromStorage } from '../utils/orderStorage';

const Index = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const orders = getOrdersFromStorage();
    const tablesWithOrders = Array.from({ length: 20 }, (_, i) => ({
      number: i + 1,
      hasOrder: !!orders[i + 1]
    }));
    setTables(tablesWithOrders);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-brown-800">Cafeteria Aroma</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
        {tables.map((table) => (
          <Link key={table.number} to={`/order/${table.number}`}>
            <Table number={table.number} hasOrder={table.hasOrder} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
