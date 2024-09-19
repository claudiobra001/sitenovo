import { HomeIcon, CoffeeIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import OrderPage from "./pages/OrderPage.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Pedido",
    to: "/order/:tableId",
    icon: <CoffeeIcon className="h-4 w-4" />,
    page: <OrderPage />,
  },
];
