import axios from "axios";
import { useEffect, useState, useRef } from "react";
import NewsElemet from "./NewsElemet";
import "./Trending.scss";
import { useTheme } from "../../context/ThemeContext";

const Trending = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef(null);

  const { theme } = useTheme();

  const getArticles = async (page) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/.netlify/functions/api/trending?page=${page}&limit=10`,
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

  useEffect(() => {
    getArticles(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    const target = observerTarget.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
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
        <div ref={observerTarget} className="loader"></div>
      </div>
    </div>
  );
};

export default Trending;
