import "./Trending.scss";
import PropTypes from "prop-types";

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
      <div className="trending-n">
        <p className="trending-source">{source}</p>
        <p className="">{formattedDate}</p>
      </div>
      <img className="trending__img" src={urlToImage} alt={urlToImage} />
      <div className="trending__details">
        <h2 className="">
          <a href={url}>{title}</a>
        </h2>
        <p className="trending-description">{description}</p>
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
