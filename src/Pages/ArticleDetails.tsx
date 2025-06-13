import { useLocation, useNavigate } from "react-router-dom";

function ArticleDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get article from state passed by Link
  const article = location.state?.article;

  // If no article, redirect back to home or search page
  if (!article) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <img
        src={article.urlToImage || "/news.jpg"}
        alt={article.title}
        className="w-full max-h-96 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 mb-6">
        {article.description || "No description available."}
      </p>

      {/* Read More button */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
      >
        Read More
      </a>
    </div>
  );
}

export default ArticleDetails;
