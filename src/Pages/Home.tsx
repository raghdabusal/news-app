import { useEffect, useState } from "react";
import ArticleCard from "../Components/ArticleCard.tsx";
import { fetchTopHeadlines } from "../API/newsApi.ts";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      const articles = await fetchTopHeadlines(); // Use the helper function here
      setArticles(articles);
      setLoading(false);
    }

    loadArticles();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Top Headlines</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
