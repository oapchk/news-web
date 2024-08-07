import "./Wishlist.scss";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
// import NewsElemet from "../Trending/NewsElemet";
import { useTheme } from "../../context/ThemeContext";
import Tooltip from "../../components/Tooltip/Tooltip";
import { MdDeleteOutline } from "react-icons/md";

const Wishlist = () => {
  const { currentUser, getWishlist } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchWishlist = async () => {
      const articles = await getWishlist();
      setWishlist(articles);
    };

    if (currentUser) {
      fetchWishlist();
    }
  }, [currentUser]);

  const handleRemoveArticle = (url) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((article) => article.url !== url)
    );
  };

  return (
    <div className={`wishlist`} data-theme={theme}>
      <div className="wishlist__main">
        <div className="wishlist__headline">
          <h3 className="wishlist-hdl">
            {currentUser
              ? `${currentUser.email}'s read later list`
              : "Read later list"}
          </h3>
        </div>

        {wishlist.length === 0 ? (
          <div className="wishlist__body">
            <p className="">No articles in wishlist</p>
          </div>
        ) : (
          // <div className="">
          //   {wishlist.map((article, index) => (
          //     <NewsElemet
          //       key={index}
          //       title={article.title}
          //       url={article.url}
          //       urlToImage={article.urlToImage}
          //       source={article.source.name}
          //       publishedAt={article.publishedAt}
          //       onRemove={handleRemoveArticle}
          //     />
          //   ))}
          // </div>
          <ul className="wishlist__list">
            {wishlist.map((article, index) => (
              <div className="wishlist__article" key={index}>
                <div className="wishlist__img">
                  <img
                    className="article-img"
                    src={article.urlToImage}
                    alt={article.urlToImage}
                  />
                </div>
                <div className="wishlist__title">
                  <h4 className="article-title">
                    <a href={article.url}>{article.title}</a>
                  </h4>
                </div>
                <button
                  className="wishlist__btn"
                  onClick={() => handleRemoveArticle(article.url)}
                >
                  <Tooltip content={"Delete"}>
                    <MdDeleteOutline />
                  </Tooltip>
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Wishlist;
