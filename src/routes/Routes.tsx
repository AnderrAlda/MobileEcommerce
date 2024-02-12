import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Product from "../pages/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "product", element: <Product /> },
    ],
  },
]);
