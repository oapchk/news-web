import "./Trending.scss";
import { useAuth } from "../../context/AuthContext";
import PropTypes from "prop-types";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

import Tooltip from "../../components/Tooltip/Tooltip";

const NewsElemet = ({
  title,
  description,
  url,
  urlToImage,
  source,
  publishedAt,
}) => {
  const { currentUser, saveArticle } = useAuth();

  const date = new Date(publishedAt);
  const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;

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
    console.log("Article saved:", title);
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
        <button
          className="trending__icons--btn"
          onClick={saveArticleToWishlist}
        >
          <Tooltip content={"Save"}>
            <IoIosAddCircleOutline />
          </Tooltip>
        </button>
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
};
export default NewsElemet;
