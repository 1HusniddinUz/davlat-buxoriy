import { useEffect, useState } from "react";
import hero_bg from "../../assets/videos/hero_bg.mp4";
import "../../assets/HeroSection.css";
// import TextType from "../ui/TextType";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [stage, setStage] = useState(0);
  // const [hasAnimated, setHasAnimated] = useState(false);

  // useEffect(() => {
  //   if (!hasAnimated) {
  //     const timers = [
  //       setTimeout(() => setStage(1), 1000),
  //       setTimeout(() => setStage(2), 5500),
  //       setTimeout(() => setStage(3), 6500),
  //     ];
  //     setHasAnimated(true);
  //     return () => timers.forEach(clearTimeout);
  //   } else {
  //     setStage(3);
  //   }
  // }, [hasAnimated, i18n.language]);

  return (
    <div id="HeroSection">
      <div className="container">
        <div className="hero_overlay"></div>
        <video
          className="background-video"
          src={hero_bg}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* <div className="content">
          <div className="text-wrapper">
            {stage >= 1 &&
              (hasAnimated ? (
                <h1 className="text-type static-text yellow-text">
                  <span className="color-bar yellow-bar"></span>
                  {t("hero_text1")}
                </h1>
              ) : (
                <div className="color-text-wrap">
                  <span className="color-bar yellow-bar"></span>
                  <TextType
                    text={[t("hero_text1")]}
                    as="h1"
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={1500}
                    showCursor={false}
                    textColors={["#ffcc00"]}
                  />
                </div>
              ))}

            <h1
              className={`artist-name ${
                stage >= 2 ? "visible" : ""
              } white-text`}
            >
              <span className="color-bar white-bar"></span>
              {t("hero_name")}
            </h1>

            {stage >= 3 && (
              <div className="professions">
                <div className="color-text-wrap">
                  <span className="color-bar blue-bar"></span>
                  <TextType
                    key={`professions-${i18n.language}`}
                    text={[
                      t("hero_text2"),
                      t("hero_text3"),
                      t("hero_text4"),
                    ]}
                    as="h2"
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    textColors={["#00c3ff", "#ffcc00", "#ffffff"]}
                  />
                </div>
              </div>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
