import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import useFetchProduct from "./CustomHooks/fetchProduct";
import { setProduct } from "./store/reducer/productReducers";
import { fetchProductData } from "./store/reducer/action";

function App() {
  // Lấy data và bắn qua Reducer, chỉ lấy 1 lần khi chương trình render lần đầu.
  const dispatch = useDispatch();
  // const { data : getDataProduct} = useFetchProduct("products");
  // console.log("Data khi chua dispatch: ", getDataProduct);
  useEffect(() => {
    fetchProductData().then((res) => dispatch(setProduct(res?.data)));
  }, []);

  return (
    <>
      <main className="pb-14 lg:pb-0">
        <Header />
        <div className="min-h-[90vh] mx-5">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
