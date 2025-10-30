import { useEffect, useState } from "react";
import "./App.css";
import Header from "../components/layout/Header.jsx";
import Content from "../components/layout/Content.jsx";
import Footer from "../components/layout/Footer.jsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "../locales/translationsEn.js";
import translationsRu from "../locales/translationsRu.js";
import translationsUz from "../locales/translationsUz.js";
import translationsFr from "../locales/translationsFr.js";
import translationsTr from "../locales/translationsTr.js";
import LoadingScreen from "../components/ui/LoadingScreen.jsx";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    ru: { translation: translationsRu },
    uz: { translation: translationsUz },
    fr: { translation: translationsFr },
    tr: { translation: translationsTr },
  },
  lng: "en",
  fallbackLng: "en",
});

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate video preload or heavy content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 sekundlik “video loading” simulyatsiyasi
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <Content />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
