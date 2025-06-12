import { useEffect } from "react";
import { fetchTopHeadlines } from "./API/newsApi";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

// @TODO adding routes to the project
function HomeApp() {
  useEffect(() => {
    const loadArticles = async () => {
      const data = await fetchTopHeadlines();
      console.log("Fetched Articles:", data);
    };

    loadArticles();
  }, []);

  return (
    <>
      <Header />
      <Home />
      <div className="p-4">
        <h1 className="text-red-500 font-bold">Check the console 👇</h1>
      </div>
      <Footer />
    </>
  );
}

export default HomeApp;
