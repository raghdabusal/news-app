import type { FC } from "react";

// This is the shape of the article we expect
export type Article = {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
};

// This is what props the ArticleCard needs from its parent
type Props = {
  article: Article;
};

// A reusable component to display one article
const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-lg shadow hover:shadow-md transition p-4 hover:bg-gray-50"
    >
      <img
        src={article?.urlToImage || "/news.jpg"} // If image is missing, use a default one
        alt={article?.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
      <p className="text-sm text-gray-600 mb-2">
        {article.description || "No description available."}
      </p>
      <span className="text-blue-500 hover:underline">Read more →</span>
    </a>
  );
};

export default ArticleCard;
