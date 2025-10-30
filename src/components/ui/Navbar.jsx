import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";
import logo from "../../../public/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav aria-label="Primary" className="navbar" data-aos="fade-down">
        <div className="container">
          <div className="NavTop">
            <div
              className="social_links"
              role="group"
              aria-label="Social links"
              data-aos="fade-right"
              data-aos-delay="80"
            >
              <img src={logo} alt="DAVLAT BUXORIY LOGOTIP" />
            </div>

            <div className="logo_box" data-aos="zoom-in" data-aos-delay="100">
              <h1>Davlat Buxoriy</h1>
            </div>

            <div
              className="lang_provider"
              data-aos="fade-left"
              data-aos-delay="120"
            >
              <label htmlFor="lang" className="sr-only">
                Language
              </label>
              <select
                id="select"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                defaultValue="en"
              >
                <option value="en">🇬🇧 English</option>
                <option value="ru">🇷🇺 Русский</option>
                <option value="uz">🇺🇿 O'zbek</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="tr">🇹🇷 Türkçe</option>
              </select>
            </div>

            <button
              type="button"
              className={`nav__toggle ${open ? "is-active" : ""}`}
              aria-expanded={open ? "true" : "false"}
              aria-controls="mobile-menu"
              aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="nav__bar" />
              <span className="nav__bar" />
              <span className="nav__bar" />
            </button>
          </div>

          {/* DESKTOP NAV */}
          <div className="NavBottom" aria-hidden={open ? "true" : "false"}>
            <ul>
              <a href="#HeroSection"><li>{t("gallery")}</li></a>
              <a href="#Products"><li>{t("arts")}</li></a>

              {/* 🛍️ Marketplaces Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => setMarketOpen(true)}
                onMouseLeave={() => setMarketOpen(false)}
              >
                <span className="dropdown-title">{t("Marketplaces")}</span>
                {marketOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="https://www.ozon.ru/product/modulnaya-kartina-16-5h28-5-sm-3043088743/" target="_blank">OZON</a></li>
                    <li><a href="https://uzum.uz/uz/product/qolda-chizilgan-rasm-2069197" target="_blank">Uzum Market</a></li>
                    <li><a href="https://market.yandex.uz/card/kartina-narisovannaya-vruchnuyu--garmoniya-iskusstva-vdokhnoveniya-i-emotsiy/4734854570?do-waremd5=VzdL6eFGjrHOmqq-MsxxNw&businessId=216456918&ogV=-6" target="_blank">Yandex Market</a></li>
                    <li><a href="https://www.wildberries.ru/catalog/588374010/detail.aspx?targetUrl=GP" target="_blank">Wildberries</a></li>
                  </ul>
                )}
              </li>

              <a href="#AboutUs"><li>{t("about")}</li></a>
              <a href="#ContactForm"><li>{t("contact")}</li></a>
            </ul>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`nav__overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={open ? "false" : "true"}
      />

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`nav__sheet ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menyu"
      >
        <div className="nav__sheet__inner" data-aos="fade-up" data-aos-delay="60">
          <div className="nav__sheet__grab" aria-hidden="true">
            <span className="nav__sheet__grabbar" />
          </div>

          <ul className="nav__panel__links">
            <a href="#HeroSection"><li>{t("gallery")}</li></a>
            <a href="#Products"><li>{t("arts")}</li></a>

            {/* Mobil Marketplaces */}
            <li className="dropdown-mobile">
              <span>{t("marketplaces")}</span>
              <ul>
                <li><a href="https://www.ozon.ru/product/modulnaya-kartina-16-5h28-5-sm-3043088743/" target="_blank">OZON</a></li>
                <li><a href="https://uzum.uz/uz/product/qolda-chizilgan-rasm-2069197" target="_blank">Uzum Market</a></li>
                <li><a href="https://market.yandex.uz/card/kartina-narisovannaya-vruchnuyu--garmoniya-iskusstva-vdokhnoveniya-i-emotsiy/4734854570?do-waremd5=VzdL6eFGjrHOmqq-MsxxNw&businessId=216456918&ogV=-6" target="_blank">Yandex Market</a></li>
                <li><a href="https://www.wildberries.ru/catalog/588374010/detail.aspx?targetUrl=GP" target="_blank">Wildberries</a></li>
              </ul>
            </li>

            <a href="#AboutUs"><li>{t("about")}</li></a>
            <a href="#ContactForm"><li>{t("contact")}</li></a>
          </ul>

          <div className="nav__panel__lang">
            <label htmlFor="mlang" className="sr-only">
              Language
            </label>
            <select
              id="select"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue="en"
            >
              <option value="en">🇬🇧 English</option>
              <option value="ru">🇷🇺 Русский</option>
              <option value="uz">🇺🇿 O'zbek</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="tr">🇹🇷 Türkçe</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
