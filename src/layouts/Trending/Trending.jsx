import axios from "axios";
import { useEffect, useState } from "react";
import NewsElemet from "./NewsElemet";
import "./Trending.scss";

const Trending = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=frontend&apiKey=23bdd785bf37417593f01b78b4c57a10"
      );
      setArticles(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, []);

  return (
    <div className="trending">
      <div className="trending__main">
        {articles.map((article, index) => {
          return (
            <NewsElemet
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
