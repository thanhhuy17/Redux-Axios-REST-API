import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main className="pb-14 lg:pb-0">
        <Header />
        <div className="min-h-[90vh]">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
