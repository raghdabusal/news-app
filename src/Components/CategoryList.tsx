import { NavLink } from "react-router-dom";
import { capitalizeName } from "../utils/Helper.ts";

const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
  "RAGHD",
];

function CategoryList() {
  return (
    <nav className="flex flex-wrap gap-4 text-sm font-medium">
      {categories.map((cat) => (
        <NavLink
          key={cat}
          to={`/category/${cat}`}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }
        >
          {capitalizeName(cat)}
        </NavLink>
      ))}
    </nav>
  );
}

export default CategoryList;
