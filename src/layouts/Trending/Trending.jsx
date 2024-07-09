import axios from "axios";
import { useEffect, useState } from "react";
import NewsElemet from "./NewsElemet";
import "./Trending.scss";
import { useTheme } from "../../context/ThemeContext";

const Trending = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          "/.netlify/functions/api/trending?page=${page}&limit=10",
          {
            mode: "cors",
          }
        );
        console.log(response.data);
        setArticles((prevArticles) => [...prevArticles, ...response.data]);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getArticles();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`trending`} data-theme={theme}>
      <div className="trending__headline">
        <h2 className="trending-hdl">Trending</h2>
      </div>
      <div className="trending__main">
        {articles.map((article, index) => {
          return (
            <NewsElemet
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              source={article.source.name}
              publishedAt={article.publishedAt}
            />
          );
        })}
        {isLoading && <p>Loading more articles...</p>}
      </div>
    </div>
  );
};

export default Trending;
