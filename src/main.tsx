import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routing.tsx";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

//Setup axios
axios.defaults.baseURL = "https://fakestoreapi.com"; // base url

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>

    {/* <App /> */}
  </Provider>
);
