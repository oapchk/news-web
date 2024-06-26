import axios from "axios";
import { useEffect, useState } from "react";
import NewsElemet from "./NewsElemet";
import "./Trending.scss";
import { useTheme } from "../../context/ThemeContext";

const Trending = () => {
  const [articles, setArticles] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get("/.netlify/functions/api/trending", {
          mode: "cors",
        });
        console.log(response.data);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    getArticles();
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
      </div>
    </div>
  );
};

export default Trending;
