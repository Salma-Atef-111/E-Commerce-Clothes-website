import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sekelton from './Components/Sekelton';
import ProductDetails from './Components/Home/ProductDetails';
import Checkout from './Components/Payment/Checkout';
import { CartProvider } from './Components/Home/CartContext';
import Payment from './Components/Payment/Payment';
import Confirmation from './Components/Payment/Confirmation';

let allRoute = createBrowserRouter([
  {
    path: '', 
    element: <Sekelton />, 
    children: [
      { index: true, element: <Home /> },
      { path: "Product/:ProductId", element: <ProductDetails /> },
      { path: "checkout", element: <Checkout /> }, 
      { path: "payment", element: <Payment /> }, 
      {path:"Confirmation",element: <Confirmation/>},

    ]
  }
]);

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={allRoute} />
    </CartProvider>
  );
}
