import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArticleCard from "../Components/ArticleCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery().get("q") || "";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetch(
      `${import.meta.env.VITE_NEWS_BASE_URL}/everything?q=${encodeURIComponent(
        query
      )}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, [query]);

  if (!query) return <p>Enter a search term.</p>;
  if (loading) return <p>Loading...</p>;
  if (articles.length === 0) return <p>No results found.</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Results for "{query}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <ArticleCard key={i} article={a} />
        ))}
      </div>
    </div>
  );
}

export default Search;
