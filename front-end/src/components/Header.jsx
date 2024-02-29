import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="text-sm sm:text-xl flex justify-between items-center gap-6 px-12 py-2 border-b-2 bg-white text-gray-800 font-semibold">
      <Link to="/">
        <span className="px-2 py-1 bg-gradient-to-r from bg-indigo-500 to-pink-500 rounded-lg text-white">
          Quote
        </span>
        Rider
      </Link>
      <form>
        <input
          type="text"
          placeholder="Search...."
          className="w-[200px] border rounded-md pl-3 hidden lg:inline"
        ></input>
      </form>
      <button className="w-12 h-10 text-gray-700 lg:hidden border rounded-2xl">
        <CiSearch />
      </button>
      <div className="flex flex-between gap-4 md:order-2">
        <button className="rounded-full border">
          <FaMoon />
        </button>
        <Link to="/Sign-in">
          <button className="rounded-md border border-blue-600">Sign in</button>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-7">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/projects">
          <div>Projects</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
