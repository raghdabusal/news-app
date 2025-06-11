import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";

function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* This is logo or site titlee */}
      <Link to="/" className="text-2xl font-bold text-black-600">
        MyNewsApp
      </Link>
      <CategoryList />
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-md px-3 py-1 text-sm w-full md:w-64"
      />
    </header>
  );
}

export default Header;
