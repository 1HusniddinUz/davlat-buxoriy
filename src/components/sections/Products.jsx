import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/Products.css";

import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";
import { useTranslation } from "react-i18next";


const ProductsDa = [
    { id: 1, name: "SULAYMON ALAYHISSALOM", img: img1, info: "Modern art of Miniature", price:  20000  },
    { id: 2, name: "TO'Y MAROSIMI", img: img2, info: "Modern art of Miniature", price: 20000 },
    { id: 3, name: "BAZM", img: img3, info: "Modern art of Miniature", price: 20000 },
    { id: 4, name: "SHAMSUL QAMAR", img: img4, info: "Modern art of Miniature", price: 2200 },
    { id: 5, name: " 22*27", img: img5, info: "Modern art of Miniature", price: 150 },
    { id: 6, name: "18*29", img: img6, info: "Modern art of Miniature", price: 140 },
    { id: 7, name: "34.5*49", img: img7, info: "Modern art of Miniature", price: 450 },
    { id: 8, name: "15*25", img: img8, info: "Modern art of Miniature", price: 140 },
];

const accents = ["accent-bronze", "accent-teal", "accent-garnet", "accent-indigo"];

const currencyUSD = (n) => n.toLocaleString("en-US") + " $";

export default function Products() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-out-cubic",
            once: true,
            offset: 100,
        });
    }, []);

    const { t } = useTranslation();
    
    return (
        <section className="products" id="Products" data-aos="fade-up" data-aos-delay="40">
            <div className="products__container">
                <header className="products__header" data-aos="zoom-in" data-aos-delay="80">
                    <div>
                        <h2 className="products__title">{t(`productH3`)}</h2>
                        <p className="products__subtitle">
                            {t(`productP`)}
                        </p>
                    </div>
                </header>

                <div className="products__grid">
                    {ProductsDa.map((p, i) => {
                        const accent = accents[i % accents.length];
                        const delay = 120 + i * 100;
                        return (
                            <article
                                className={`card ${accent}`}
                                key={p.id}
                                data-aos="fade-up"
                                data-aos-delay={String(delay)}
                                data-aos-anchor-placement="top-bottom"
                            >
                                <div className="card__media" data-aos="zoom-in" data-aos-delay={String(delay + 40)}>
                                    <img src={p.img} alt={p.name} loading="lazy" />
                                    <div className="card__media-ring" aria-hidden="true" />
                                    <div className="card__media-gradient" aria-hidden="true" />
                                    <span className="card__badge" data-aos="fade" data-aos-delay={String(delay + 140)}>
                    Miniatyura
                  </span>
                                </div>

                                <div className="card__body">
                                    <div className="card__top">
                                        <h3 className="card__name">{p.name}</h3>
                                        <span className="card__price">{currencyUSD(p.price)}</span>
                                    </div>
                                    <p className="card__info">{p.info}</p>

                                    <div className="card__palette" aria-hidden="true">
                                        <span className="dot dot--bronze" />
                                        <span className="dot dot--teal" />
                                        <span className="dot dot--garnet" />
                                        <span className="dot dot--indigo" />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
