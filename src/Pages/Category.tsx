import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../Components/ArticleCard.tsx";

function Category() {
  const { category } = useParams(); // get category name from the URL
  const [articles, setArticles] = useState([]); // to store the fetched articles

  useEffect(() => {
    const fetchCategoryArticles = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_NEWS_BASE_URL
          }/top-headlines?country=us&category=${category}&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching category articles", error);
      }
    };

    fetchCategoryArticles();
  }, [category]); // runs again if the category in URL changes

  return (
    <section className="grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </section>
  );
}

export default Category;
