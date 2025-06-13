import { Link, useNavigate } from "react-router-dom";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";

function Header() {
  const navigate = useNavigate();

  function handleSearch(query: string) {
    if (!query) {
      navigate("/"); // if empty, go home
      return;
    }
    navigate(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <header className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <Link to="/" className="text-red-500 font-bold text-black-600">
        MyNewsApp
      </Link>
      <CategoryList />
      {/* Pass the onSearch prop */}
      <SearchBar onSearch={handleSearch} />
    </header>
  );
}

export default Header;
