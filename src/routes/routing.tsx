import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Page/HomePage";
import NotFoundPage from "./NotFoundPage";
import ProductDetailPage from "../Page/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default router;
