import "./Main.scss";

const Main = () => {
  return (
    <div className="main__container">
      <div className="main__sidemenu">
        <ul className="sidemenu__items">
          <li>
            <a href="" className="sidemenu__item">
              All
            </a>
          </li>
          <li>
            <a href="" className="sidemenu__item">
              Web Design
            </a>
          </li>
          <li>
            <a href="" className="sidemenu__item">
              UX
            </a>
          </li>
          <li>
            <a href="" className="sidemenu__item">
              JavaScript
            </a>
          </li>
          <li>
            <a href="" className="sidemenu__item">
              CSS
            </a>
          </li>
          <li>
            <a href="" className="sidemenu__item">
              Accessibility
            </a>
          </li>
        </ul>
      </div>
      <div className="main__articles"></div>
      <div className="main__aside"></div>
    </div>
  );
};

export default Main;
