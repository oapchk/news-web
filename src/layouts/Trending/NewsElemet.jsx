import "./Trending.scss";
import PropTypes from "prop-types";
import { IoIosAddCircleOutline } from "react-icons/io";
import Tooltip from "../../components/Tooltip/Tooltip";
const NewsElemet = ({
  title,
  description,
  url,
  urlToImage,
  source,
  publishedAt,
}) => {
  const date = new Date(publishedAt);
  const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;
  return (
    <div className="trending__article">
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
        <div className="trending-source">
          <div className="">
            <p className="trending-source__name">{source}</p>
            <p className="trending-source__date">{formattedDate}</p>
          </div>
          <button className="article__icons--btn">
            <Tooltip content={"Save"}>
              <IoIosAddCircleOutline />
            </Tooltip>
          </button>
        </div>
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
