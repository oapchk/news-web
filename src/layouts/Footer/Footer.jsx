import { useState } from "react";
import "./Footer.scss";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaDiscord, FaYoutube } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState([]);
  const { theme } = useTheme();

  const accordionData = [
    {
      title: "News",
      items: ["Web Design", "UX", "JavaScript", "CSS", "Accessibility"],
    },
    {
      title: "About us",
      items: ["Get to know us", "Join our team", "Community"],
    },
    {
      title: "Contact",
      items: ["Help", "FAQ", "Address"],
    },
  ];

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
    <footer className={`footer`} data-theme={theme}>
      <div className="footer__main">
        <div className="footer__nav">
          <nav className="footer-navigation">
            {accordionData.map((section, index) => (
              <div className="footer-navigation__item" key={index}>
                <div
                  className="footer-navigation__header footer__header"
                  onClick={() => handleAccordionClick(index)}
                >
                  {section.title}
                </div>
                <div
                  className={`footer-navigation__body ${
                    openAccordion.includes(index) ? "open" : ""
                  }`}
                >
                  <ul className="footer-navigation__list">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="footer-navigation__list--item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className="footer__social">
          <div className="footer-social">
            <div className="footer-social__header footer__header">Join us</div>
            <ul className="footer-social__list">
              {[
                { icon: <FaXTwitter />, href: "#" },
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaDiscord />, href: "#" },
                { icon: <FaYoutube />, href: "#" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="footer-social__item footer-social__item--icon"
                >
                  <a href={item.href}>{item.icon}</a>
                </li>
              ))}
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
