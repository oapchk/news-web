import "./Main.scss";
import { useState, useEffect } from "react";
import { CiShare1 } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

const Main = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const dayOfTheWeek = currentDate.toLocaleDateString("en-EN", {
    weekday: "long",
  });
  const monthAndDateNumber = currentDate.toLocaleDateString("en-EN", {
    month: "long",
    day: "numeric",
  });
  return (
    <div className="main__container">
      <div className="main__inner">
        <div className="main__sidemenu">
          <ul className="sidemenu__items">
            <li className="sidemenu__item">
              <a href="">All</a>
            </li>
            <li className="sidemenu__item">
              <a href="">Web Design</a>
            </li>
            <li className="sidemenu__item">
              <a href="">UX</a>
            </li>
            <li className="sidemenu__item">
              <a href="">JavaScript</a>
            </li>
            <li className="sidemenu__item">
              <a href="">CSS</a>
            </li>
            <li className="sidemenu__item">
              <a href="">Accessibility</a>
            </li>
          </ul>
        </div>
        <div className="main__articles">
          <p className="articles__date--small">{dayOfTheWeek},</p>
          <h1 className="articles__date--big">{monthAndDateNumber}</h1>
          <div className="article__main">
            <img className="img--main" />
            <div className="article__details">
              <div className="article__details--author">
                <img className="article__details--img img__miniature" />
                <p className="article__details--name">Cindy Clawford</p>
              </div>

              <div className="article__icons">
                <a href="">
                  <CiShare1 />
                </a>
                <a href="">
                  <IoIosAddCircleOutline />
                </a>
              </div>
            </div>
            <div className="article__details--2ndline">
              <p className="article__details--time">12 min read</p>
              <p className="article__details--category">UX</p>
            </div>
          </div>
          <div className="article__shortcut">
            <h2 className="article__hdl hdl">
              A Practical Guide To Designing For Colorblind People
            </h2>
            <p className="article__lead">
              Color accessibility is more than just ticking boxes. Even with
              good contrast, some color palettes can make interfaces challenging
              for users. Here are some practical guidelines to ensure more
              inclusive design for colorblind people. An upcoming part of Smart
              Interface Design Patterns.
            </p>
            <button className="btn--big">Read All</button>
          </div>
          <span className="line"></span>
          <div className="articles__3boxes">
            <div className="articles__3boxes--big">
              <div className="article__details--2ndline">
                <p className="article__details--time">9 min read</p>
                <p className="article__details--category">Web Design</p>
              </div>
              <h4 className="articles__3boxes--title">
                When Words Cannot Describe: Designing For AI Beyond
                Conversational Interfaces
              </h4>
              <img className="img--small" />
            </div>
            <div className="articles__3boxes--small">
              <div className="article__details--2ndline">
                <p className="article__details--time">23 min read</p>
                <p className="article__details--category">CSS</p>
              </div>
              <h4 className="articles__3boxes--title">
                New CSS Viewport Units Do Not Solve The Classic Scrollbar
                Problem
              </h4>
              <div className="article__details--author">
                <img className="article__details--img--2 img__miniature" />
                <p className="article__details--name">Cat Stevens</p>
              </div>
            </div>
            <div className="articles__3boxes--small--2">
              <div className="article__details--2ndline">
                <p className="article__details--time">10 min read</p>
                <p className="article__details--category">JavaScript</p>
              </div>
              <h4 className="articles__3boxes--title">
                Vanilla JavaScript, Libraries, And The Quest For Stateful DOM
                Rendering
              </h4>
              <div className="article__details--author">
                <img className="article__details--img--3 img__miniature" />
                <p className="article__details--name">Meowrilyn Monroe</p>
              </div>
            </div>
          </div>
          <span className="line"></span>
        </div>
        <div className="main__aside"></div>
      </div>
    </div>
  );
};

export default Main;
