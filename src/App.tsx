import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { fetchTopHeadlines } from "./API/newsApi";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Category from "./Pages/Category";

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
        {/* Add more routes here if needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default HomeApp;
