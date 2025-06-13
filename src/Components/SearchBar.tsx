import React from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [q, setQ] = React.useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQ(val);
    onSearch(val);
  }

  return (
    <input
      type="text"
      value={q}
      onChange={handleChange}
      placeholder="Search..."
      className="border rounded px-2 py-1 w-full md:w-64"
    />
  );
};

export default SearchBar;
