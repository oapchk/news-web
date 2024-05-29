import "./Trending.scss";

const NewsElemet = ({ title, description, url, urlToImage }) => {
  return (
    <div className="trending__article">
      <img className="trending__img" src={urlToImage} alt={urlToImage} />
      <div className="trending__details">
        <h3 className="">
          <a href={url}>{title}</a>
        </h3>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default NewsElemet;
