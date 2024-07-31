import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header = () => {
  const numberProduct = useSelector((state: RootState) => state.proNumber);
  return (
    <div
      className="fixed flex items-center top-0 px-20 text-emerald-400 text-xl font-bold
    w-full h-14 bg-opacity-75 z-40 bg-neutral-700 shadow-md shadow-neutral-300 justify-between"
    >
      <div>
        <Link to={"/"}>
          <h2>FakeShop</h2>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <GiShoppingCart size={"2.5rem"} />
        <span className="text-red-600 text-2xl bg-white px-3 rounded-full">
          {numberProduct}
        </span>
      </div>
    </div>
  );
};

export default Header;
