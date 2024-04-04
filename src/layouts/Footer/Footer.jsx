import { useState } from "react";
import "./Footer.scss";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState([]);

  const handleAccordionClick = (index) => {
    // Sprawdź, czy element jest już otwarty
    const isOpen = openAccordion.includes(index);

    // Jeśli jest otwarty, zamknij go
    if (isOpen) {
      setOpenAccordion(
        openAccordion.filter((itemIndex) => itemIndex !== index)
      );
    } else {
      // Jeśli nie jest otwarty, otwórz go, dodając jego index do tablicy otwartych elementów
      setOpenAccordion([...openAccordion, index]);
    }
  };
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__nav">
          <nav className="footer-navigation">
            <div className="footer-navigation__item">
              <div
                className="footer-navigation__header footer__header"
                onClick={() => handleAccordionClick(0)}
              >
                News
              </div>
              <div
                className={`footer-navigation__body ${
                  openAccordion.includes(0) ? "open" : ""
                }`}
              >
                <ul className="footer-navigation__list">
                  <li className="footer-navigation__list--item">Web Design</li>
                  <li className="footer-navigation__list--item">UX</li>
                  <li className="footer-navigation__list--item">JavaScript</li>
                  <li className="footer-navigation__list--item">CSS</li>
                  <li className="footer-navigation__list--item">
                    Accessibility
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-navigation__item">
              <div
                className="footer-navigation__header footer__header"
                onClick={() => handleAccordionClick(1)}
              >
                About us
              </div>
              <div
                className={`footer-navigation__body ${
                  openAccordion.includes(1) ? "open" : ""
                }`}
              >
                <ul className="footer-navigation__list">
                  <li className="footer-navigation__list--item">
                    Get to know us
                  </li>
                  <li className="footer-navigation__list--item">
                    Join our team
                  </li>
                  <li className="footer-navigation__list--item">Community</li>
                </ul>
              </div>
            </div>
            <div className="footer-navigation__item">
              <div
                className="footer-navigation__header footer__header"
                onClick={() => handleAccordionClick(2)}
              >
                Contact
              </div>
              <div
                className={`footer-navigation__body ${
                  openAccordion.includes(2) ? "open" : ""
                }`}
              >
                <ul className="footer-navigation__list">
                  <li className="footer-navigation__list--item">Help</li>
                  <li className="footer-navigation__list--item">FAQ</li>
                  <li className="footer-navigation__list--item">Address</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="footer__social">
          <div className="footer-social">
            <div className="footer-social__header footer__header">Join us</div>
            <ul className="footer-social__list">
              <li className="footer-social__item footer-social__item--icon">
                <a className="" href="">
                  <FaXTwitter />
                </a>
              </li>
              <li className="footer-social__item footer-social__item--icon">
                <a className="" href="">
                  <FaFacebookF />
                </a>
              </li>
              <li className="footer-social__item footer-social__item--icon">
                <a className="" href="">
                  <FaDiscord />
                </a>
              </li>
              <li className="footer-social__item footer-social__item--icon">
                <a className="" href="">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__sub"></div>
        <div className="footer__bottom">
          <ul className="footer-mini-nav">
            <li className="footer-mini-nav__item">
              <a>Privacy policy</a>
            </li>
            <li className="footer-mini-nav__item">
              <a>Cookie policy</a>
            </li>
          </ul>
          <div className="footer__copyright">© 2024 Frontend.NEWS </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
