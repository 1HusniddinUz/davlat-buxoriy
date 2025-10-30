// src/components/products/Products.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/Products.css";
import { useTranslation } from "react-i18next";
import ProductsData from "./ProductsData";

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
            <p className="products__subtitle">{t(`productP`)}</p>
          </div>
        </header>

        <div className="products__grid">
          {ProductsData.map((p, i) => {
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
                  <img src={p.img} alt={t(p.nameKey)} loading="lazy" />
                  <div className="card__media-ring" aria-hidden="true" />
                  <div className="card__media-gradient" aria-hidden="true" />
                  <span className="card__badge" data-aos="fade" data-aos-delay={String(delay + 140)}>
                    Miniatyura
                  </span>
                </div>

                <div className="card__body">
                  <div className="card__top">
                    <h3 className="card__name">{t(p.nameKey)}</h3>
                    <span className="card__price">{currencyUSD(p.price)}</span>
                  </div>
                  <p className="card__info">{t(p.infoKey)}</p>

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
