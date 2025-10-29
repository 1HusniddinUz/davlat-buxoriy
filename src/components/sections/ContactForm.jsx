import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/ContactForm.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", number: "" });
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-out-cubic",
            once: true,
            offset: 100,
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Uzbekistan mask: +998 (AA)-BBB-CC-DD  where AA BBB CC DD = 9 digits total
    const formatUz = (digits) => {
        const d = (digits || "")
            .split("")
            .filter((ch) => ch >= "0" && ch <= "9")
            .join("")
            .slice(0, 9);

        const p1 = d.slice(0, 2);
        const p2 = d.slice(2, 5);
        const p3 = d.slice(5, 7);
        const p4 = d.slice(7, 9);

        return `+998 (${p1.padEnd(2, "_")})-${p2.padEnd(3, "_")}-${p3.padEnd(2, "_")}-${p4.padEnd(2, "_")}`;
    };

    const handleNumberChange = (e) => {
        let raw = e.target.value || "";
        raw = raw
            .split("")
            .filter((ch) => ch >= "0" && ch <= "9")
            .join("");
        if (raw.startsWith("998")) raw = raw.slice(3);
        setForm((prev) => ({ ...prev, number: raw.slice(0, 9) }));
    };

    const isValid = (form.name || "").trim().length > 1 && (form.number || "").trim().length === 9;

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = (form.name || "").trim();
        const digits = (form.number || "").trim();
        if (!name || digits.length !== 9) return;

        const fullNumber = `+998 (${digits.slice(0, 2)}) ${digits.slice(2, 5)}-${digits.slice(5, 7)}-${digits.slice(7, 9)}`;

        const to = "husniddinhalimov112@gmail.com";
        const subject = "Buyurtma so‘rovi";
        const body = `Assalomu alaykum, san'at asarlaringizdan birini xarid qilish uchun murojaat qilmoqdaman.\n\nMa’lumotlarim:\nIsmim: ${name}\nTelefon raqamim: ${fullNumber}\n\nQayta aloqaga chiqsangiz xursand bo'laman.`;

        const gmailUrl =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            `&to=${encodeURIComponent(to)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        const a = document.createElement("a");
        a.href = gmailUrl;
        a.target = "_blank";
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    const IFRAME_SRC =
        "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6133.3786722132545!2d64.41964300000001!3d39.769083!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzA4LjciTiA2NMKwMjUnMTAuNyJF!5e0!3m2!1sru!2s!4v1761546694040!5m2!1sru!2s";

    return (
        <section id="ContactForm" className="cf" aria-labelledby="cf-title" data-aos="fade-up">
            <div className="cf__container">
                <div className="cf__card" data-aos="zoom-in" data-aos-delay="80">
                    <header className="cf__header">
                        <h2 id="cf-title" className="cf__title">{t(`contact`)}</h2>
                        <p className="cf__subtitle">
                            {t(`contactP`)}
                        </p>
                    </header>

                    <nav className="cf__social" aria-label="Ijtimoiy tarmoqlar" data-aos="fade" data-aos-delay="120">
                        <a href="https://t.me/+998907153786" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <i className="fa-brands fa-telegram" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/davlattoshev" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.facebook.com/davlat.toshev" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                        </a>
                    </nav>

                    <form className="cf__form" onSubmit={handleSubmit} noValidate>
                        <div className="cf__row">
                            <div className="cf__field" data-aos="fade-right" data-aos-delay="140">
                                <label htmlFor="name" className="cf__label">{t(`contactNameInp`)}</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Ismingiz"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="cf__input"
                                    autoComplete="name"
                                    required
                                    aria-invalid={form.name.trim().length <= 1 ? "true" : "false"}
                                />
                            </div>

                            <div className="cf__field" data-aos="fade-left" data-aos-delay="160">
                                <label htmlFor="number" className="cf__label">{t(`contactPhoneInp`)}</label>
                                <input
                                    id="number"
                                    name="number"
                                    type="tel"
                                    inputMode="numeric"
                                    dir="ltr"
                                    placeholder="+998 (__)-___-__-__"
                                    value={formatUz(form.number)}
                                    onChange={handleNumberChange}
                                    className="cf__input cf__input--tel"
                                    required
                                    aria-invalid={form.number.trim().length !== 9 ? "true" : "false"}
                                />
                                <small className="cf__hint">{t(`contactEx`)}</small>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="cf__btn"
                            disabled={!isValid}
                            aria-disabled={!isValid}
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            {t(`contactBtn`)}
                        </button>
                    </form>
                </div>

                <div className="cf__mapwrap" data-aos="fade-up" data-aos-delay="240">
                    <iframe
                        src={IFRAME_SRC}
                        title="Ofis manzili xaritada"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
