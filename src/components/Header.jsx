import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center p-3 mx-auto max-w-6xl">
        <Link to="/">
          <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer">
            <span className="text-slate-500">Sahand</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className=" bg-slate-100  p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search"
            className=" bg-transparent  border-none focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className=" text-slate-600  cursor-pointer" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline hover:underline text-slate-700">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline text-slate-700">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="hidden sm:inline hover:underline text-slate-700">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
