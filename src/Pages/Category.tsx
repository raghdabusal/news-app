import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Article } from "../Components/ArticleCard"; // only import the type
import ArticleCard from "../Components/ArticleCard"; // import the component normally
import LoadingSpinner from "../Components/LoadingSpinner";

function Category() {
  // Correct param name (matches your <Route path="/category/:categoryId" ...>)
  const { categoryId } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryArticles() {
      try {
        setLoading(true);
        const res = await fetch(
          `${
            import.meta.env.VITE_NEWS_BASE_URL
          }/top-headlines?category=${categoryId}&country=us&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Failed to fetch category articles:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryArticles();
  }, [categoryId]); // rerun when category changes

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold capitalize mb-4">{categoryId} News</h1>

      {loading ? (
        <LoadingSpinner />
      ) : articles.length === 0 ? (
        <p>No articles found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
