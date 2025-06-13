import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetails from "./Pages/ArticleDetails";

import { fetchTopHeadlines } from "./API/newsApi";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Search from "./Pages/Search";

function HomeApp() {
  useEffect(() => {
    const loadArticles = async () => {
      const data = await fetchTopHeadlines();
      console.log("Fetched Articles:", data);
    };

    loadArticles();
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/article-details" element={<ArticleDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default HomeApp;
