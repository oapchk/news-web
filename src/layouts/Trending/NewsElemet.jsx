import "./Trending.scss";
import { useAuth } from "../../context/AuthContext";
import PropTypes from "prop-types";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";

import Tooltip from "../../components/Tooltip/Tooltip";

const NewsElemet = ({
  title,
  description,
  url,
  urlToImage,
  source,
  publishedAt,
  onRemove,
}) => {
  const { currentUser, saveArticle, getWishlist, deleteArticle } = useAuth();
  const [isInWishlist, setIsInWishlist] = useState(false);

  const date = new Date(publishedAt);
  const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;

  //check if is in wishlist

  useEffect(() => {
    const checkIfInWishlist = async () => {
      if (!currentUser) return;
      const wishlist = await getWishlist();
      const articleInWishlist = wishlist.find((article) => article.url === url);
      setIsInWishlist(!!articleInWishlist);
    };

    checkIfInWishlist();
  }, [currentUser, url, getWishlist]);

  //add to wishlist

  const saveArticleToWishlist = async () => {
    if (!currentUser) {
      alert("Please log in to save articles to your wishlist.");
      return;
    }
    const article = {
      title,
      description,
      url,
      urlToImage,
      source,
      publishedAt,
    };
    await saveArticle(article);
    setIsInWishlist(true);
    console.log("Article saved:", title);
  };

  const deleteArticleFromWishlist = async () => {
    if (!currentUser) {
      alert("Please log in to delete articles from your wishlist.");
      return;
    }
    await deleteArticle(url);
    setIsInWishlist(false);
    onRemove(url);
    console.log("Article deleted:", title);
  };

  return (
    <div className="trending__article">
      <div className="trending-source">
        <div className="">
          <p className="trending-source__name">{source}</p>
          <p className="trending-source__date">{formattedDate}</p>
        </div>
      </div>
      <div className="trending__img">
        <img className="trending-img" src={urlToImage} alt={urlToImage} />
      </div>

      <div className="trending__card">
        <div className="trending-header">
          <h3 className="trending-header__title">
            <a href={url}>{title}</a>
          </h3>
          <p className="trending-header__body">{description}</p>
        </div>
        {isInWishlist ? (
          <button
            className="trending__icons--btn"
            onClick={deleteArticleFromWishlist}
          >
            <Tooltip content={"Delete"}>
              <MdDeleteOutline />
            </Tooltip>
          </button>
        ) : (
          <button
            className="trending__icons--btn"
            onClick={saveArticleToWishlist}
          >
            <Tooltip content={"Save"}>
              <IoIosAddCircleOutline />
            </Tooltip>
          </button>
        )}
      </div>
    </div>
  );
};

NewsElemet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string,
  source: PropTypes.string,
  publishedAt: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
};
export default NewsElemet;
