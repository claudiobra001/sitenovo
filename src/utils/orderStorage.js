const ORDER_STORAGE_KEY = 'cafeOrders';

export const getOrdersFromStorage = () => {
  const orders = localStorage.getItem(ORDER_STORAGE_KEY);
  return orders ? JSON.parse(orders) : {};
};

const saveOrdersToStorage = (orders) => {
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
};

export const getOrderForTable = (tableId) => {
  const orders = getOrdersFromStorage();
  return orders[tableId] || [];
};

export const saveOrderForTable = (tableId, order) => {
  const orders = getOrdersFromStorage();
  orders[tableId] = order;
  saveOrdersToStorage(orders);
};

export const removeOrderForTable = (tableId) => {
  const orders = getOrdersFromStorage();
  delete orders[tableId];
  saveOrdersToStorage(orders);
};
