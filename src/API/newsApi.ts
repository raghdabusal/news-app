import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;

/** * Fetch general top headlines from US */
export const fetchTopHeadlines = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: "us",
        apiKey: API_KEY,
      },
    });
    // console.log("Category articles :: ", response.data.articles);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return [];
  }
};
