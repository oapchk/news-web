import "./Wishlist.scss";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import NewsElemet from "../Trending/NewsElemet";
import { useTheme } from "../../context/ThemeContext";

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

  return (
    <div className={`wishlist`} data-theme={theme}>
      <div className="wishlist__headline">
        <h2 className="wishlist-hdl">
          {currentUser
            ? `${currentUser.displayName}'s Read later list`
            : "Read later list"}
        </h2>
      </div>

      {wishlist.length === 0 ? (
        <div className="">
          <p className="">No articles in wishlist</p>
        </div>
      ) : (
        <div className="">
          {wishlist.map((article, index) => (
            <NewsElemet
              key={index}
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              source={article.source.name}
              publishedAt={article.publishedAt}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Wishlist;
