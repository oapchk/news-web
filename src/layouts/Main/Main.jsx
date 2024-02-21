import "./Main.scss";
import { useState, useEffect } from "react";

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
            <img className="" />
            <div className="article__details">
              <img className="article__author" />
              <a href=""></a>
              <a href=""></a>
            </div>
            <p className="">12 min</p>
            <p className="">UX</p>
          </div>
          <div className="">
            <h2 className="">
              A Practical Guide To Designing For Colorblind People
            </h2>
            <p className="">
              Color accessibility is more than just ticking boxes. Even with
              good contrast, some color palettes can make interfaces challenging
              for users. Here are some practical guidelines to ensure more
              inclusive design for colorblind people. An upcoming part of Smart
              Interface Design Patterns.
            </p>
            <button className="">Read All</button>
          </div>
        </div>
        <div className="main__aside"></div>
      </div>
    </div>
  );
};

export default Main;
