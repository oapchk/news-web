import "./Main.scss";
import { useState, useEffect } from "react";
import { CiShare2 } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import Tooltip from "../../components/Tooltip/Tooltip";

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
                <img className="article__details--img img--miniature" />
                <p className="article__details--name">Cindy Clawford</p>
              </div>

              <div className="article__icons">
                <a href="">
                  <Tooltip text={"Share"}>
                    <CiShare2 />
                  </Tooltip>
                </a>
                <a href="">
                  <Tooltip text={"Save"}>
                    <IoIosAddCircleOutline />
                  </Tooltip>
                </a>
              </div>
            </div>
            <div className="article__details--2ndline">
              <p className="article__details--time">12 min read</p>
              <p className="article__details--category">Accessibility</p>
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
            <button className="btn--big btn">Read All</button>
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
                <img className="article__details--img--2 img--miniature" />
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
                <img className="article__details--img--3 img--miniature" />
                <p className="article__details--name">Meowrilyn Monroe</p>
              </div>
            </div>
          </div>
          <span className="line"></span>
          <div className="articles__1box">
            <div className="articles__3boxes--small">
              <div className="article__details--2ndline">
                <p className="article__details--time">16 min read</p>
                <p className="article__details--category">UX</p>
              </div>
              <h4 className="articles__3boxes--title">
                Designing Navigation for Mobile: Design Patterns and Best
                Practices
              </h4>
              <div className="article__details--author">
                <img className="article__details--img--4 img--miniature" />
                <p className="article__details--name">Clint Pawwood</p>
              </div>
            </div>
            <img className="img--small--2" />
          </div>
          <span className="line"></span>
        </div>
        <div className="main__aside aside">
          <div className="aside__trending">
            <div className="aside__heading">
              <p className="">Trending</p>
              <span className="trending_light"></span>
              <button className="btn--small btn">View all</button>
            </div>

            <div className="aside__titles">
              <h3 className="articles__3boxes--title">
                The Guide to BEM & SCSS: Writing Clean, Structured, and Slightly
                Sassier Stylesheets
              </h3>
              <div className="article__details--2ndline">
                <p className="article__details--time">12 min read</p>
                <p className="article__details--category">CSS</p>
              </div>
              <span className="line"></span>
              <h3 className="articles__3boxes--title">
                Mastering JSX: Unveiling the Secrets for JavaScript, React, and
                Frontend Brilliance
              </h3>
              <div className="article__details--2ndline">
                <p className="article__details--time">9 min read</p>
                <p className="article__details--category">JavaScript</p>
              </div>
              <span className="line"></span>
              <h3 className="articles__3boxes--title">
                Drive Success and Avoid Costly Mistakes By Getting Your UX
                Research Right!
              </h3>
              <div className="article__details--2ndline">
                <p className="article__details--time">7 min read</p>
                <p className="article__details--category">UX</p>
              </div>
            </div>
            <p className="authors__heading">Our authors</p>
            <div className="aside__authors">
              <div className="author__details">
                <img className="article__details--img--5 img--bigger" />
                <p className="article__details--name">
                  Meowrold Schwarzenegger
                </p>
                <p className="article__details--role">Tech author</p>
              </div>
              <div className="author__details">
                <img className="article__details--img--6 img--bigger" />
                <p className="article__details--name">Purrrincess Grace</p>
                <p className="article__details--role">UX Designer</p>
              </div>
              <div className="author__details">
                <img className="article__details--img--7 img--bigger" />
                <p className="article__details--name">Humphrey Catgart</p>
                <p className="article__details--role">Art Director</p>
              </div>
              <div className="author__details">
                <img className="article__details--img--8 img--bigger" />
                <p className="article__details--name">Purrbara Streisand</p>
                <p className="article__details--role">Marketing</p>
              </div>
            </div>
          </div>
          <div className="aside__subscribe">
            <h2 className="subscribe__box--title">
              Learn something new every day
            </h2>
            <p className="subscribe__box--lead">
              Get the latest updates on our magazine, featuring new and
              underrated ideas to improve the world.
            </p>
            <button className="btn--black btn">Subscribe</button>
          </div>
          <div className="aside__titles">
            <h3 className="articles__3boxes--title">
              The Guide to BEM & SCSS: Writing Clean, Structured, and Slightly
              Sassier Stylesheets
            </h3>
            <div className="article__details--2ndline">
              <p className="article__details--time">12 min read</p>
              <p className="article__details--category">CSS</p>
            </div>
            <span className="line"></span>
            <h3 className="articles__3boxes--title">
              Mastering JSX: Unveiling the Secrets for JavaScript, React, and
              Frontend Brilliance
            </h3>
            <div className="article__details--2ndline">
              <p className="article__details--time">9 min read</p>
              <p className="article__details--category">JavaScript</p>
            </div>
            <span className="line"></span>
            <h3 className="articles__3boxes--title">
              Drive Success and Avoid Costly Mistakes By Getting Your UX
              Research Right!
            </h3>
            <div className="article__details--2ndline">
              <p className="article__details--time">7 min read</p>
              <p className="article__details--category">UX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
