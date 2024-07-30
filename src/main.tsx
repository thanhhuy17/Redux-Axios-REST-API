import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routing.tsx";
import axios from "axios";

//Setup axios
axios.defaults.baseURL = "https://fakestoreapi.com"; // base url

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    {/* <App /> */}
  </Provider>
);
