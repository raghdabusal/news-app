import { useEffect, useState } from "react"; // useState & useEffect (store the data, run the code )
import ArticleCard from "../Components/ArticleCard.tsx";

// The main Function
function Home() {
  const [articles, setArticles] = useState([]); // to Hold the list of articles from the API
  const [loading, setLoading] = useState(true); // Indicate if data is still being fetched

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;

  // This function runs after the component first renders.
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        //Send a request to the api
        const res = await fetch(
          `${BASE_URL}/top-headlines?country=us&pageSize=12&apiKey=${API_KEY}`
        );
        const data = await res.json(); //converts the response into a js object
        setArticles(data.articles); // fill the empty article
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        //This always run, it tells the app that loading is done, so u can stop showing
        setLoading(false);
      }
    };

    fetchArticles();
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
