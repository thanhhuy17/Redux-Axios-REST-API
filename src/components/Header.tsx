import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="fixed flex items-center top-0 px-20 text-emerald-400 text-xl font-bold
    w-full h-14 bg-opacity-75 z-40 bg-neutral-700 shadow-md shadow-neutral-300"
    >
      <div>
        <Link to={"/"}>
          <h2>FakeShop</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
