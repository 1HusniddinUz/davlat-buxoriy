import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();
    
    useEffect(() => {
        AOS.init({ duration: 320, easing: "ease-out", once: true });
    }, []);

    // ✅ AOS INIT
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
            offset: 100,
        });
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
                        <div className="social_links" role="group" aria-label="Social links" data-aos="fade-right" data-aos-delay="80">
                            <a href="https://www.instagram.com/davlattoshev" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a href="https://t.me/davlattoshev" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                <i className="fa-brands fa-telegram" aria-hidden="true"></i>
                            </a>
                        </div>

                        <div className="logo_box" data-aos="zoom-in" data-aos-delay="100">
                            <h1>Davlat Buxoriy</h1>
                        </div>

                        <div className="lang_provider" data-aos="fade-left" data-aos-delay="120">
                            <label htmlFor="lang" className="sr-only">Language</label>
                    <select
                        id="select"
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        defaultValue="en"
                    >
                        <option value="uz">🇺🇿 O'zbek</option>
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="en">🇬🇧 English</option>
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

                    <div className="NavBottom" aria-hidden={open ? "true" : "false"}>
                        <ul>
                            <a href="#Products"><li>{t(`arts`)}</li></a>
                            {/* Marketplaces */}
                            <a href="#AboutUs"><li>{t(`about`)}</li></a>
                            <a href="#ContactForm"><li>{t(`contact`)}</li></a>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* 100vh overlay */}
            <div
                className={`nav__overlay ${open ? "is-open" : ""}`}
                onClick={() => setOpen(false)}
                aria-hidden={open ? "false" : "true"}
            />

            {/* 60vh bottom-sheet menyu */}
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
                            <a href="#Products"><li>{t(`arts`)}</li></a>
                            {/* Marketplaces */}
                            <a href="#AboutUs"><li>{t(`about`)}</li></a>
                            <a href="#ContactForm"><li>{t(`contact`)}</li></a>
                    </ul>

                    <div className="nav__panel__lang">
                        <label htmlFor="mlang" className="sr-only">Language</label>
                    <select
                        id="select"
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        defaultValue="en"
                    >
                        <option value="uz">🇺🇿 O'zbek</option>
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="en">🇬🇧 English</option>
                        <option value="en">🇫🇷 Français</option>
                        <option value="en">🇹🇷 Türkçe</option>
                    </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
