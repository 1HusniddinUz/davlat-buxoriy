import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/AboutUs.css";

import toshev from "../../assets/images/toshev.png";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: true,
            offset: 80
        });
    }, []);

    const { t } = useTranslation();
 
    return (
        <section id="AboutUs" className="about" aria-labelledby="aboutus-title" data-aos="fade-up">
            <div className="au-container">
                <figure className="au-photo" data-aos="zoom-in" data-aos-delay="80">
                    <img src={toshev} alt="Davlat Toshev, miniatura ustasi" loading="lazy" />
                    <figcaption className="sr-only">Miniaturist rassom</figcaption>
                    <span className="au-photo-ring" aria-hidden="true" />
                    <span className="au-photo-glow" aria-hidden="true" />
                </figure>

                <div className="au-info">
                    <header className="au-header" data-aos="fade-right" data-aos-delay="120">
                        <h1 id="aboutus-title" className="au-title">{t(`managerName`)}</h1>
                        <div className="au-tags" role="list">
                            <span className="au-chip" role="listitem" data-aos="fade" data-aos-delay="180">{t(`aboutUsSpan`)}</span>
                            <span className="au-dot" aria-hidden="true">•</span>
                            <span className="au-sub" role="listitem" data-aos="fade" data-aos-delay="220">Miniaturist</span>
                        </div>
                    </header>

                    <p className="au-text" data-aos="fade-up" data-aos-delay="260">
                        {t(`aboutUsP`)}
                    </p>
                </div>
            </div>
        </section>
    );
}
