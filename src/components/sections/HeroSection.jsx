import hero_bg from "../../assets/videos/hero_bg.mp4";
import "../../assets/HeroSection.css";
import TextType from "../ui/TextType";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div id="HeroSection">
      <div className="container">
        <video
          className="background-video"
          src={hero_bg}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="content">
          <div className="text-wrapper">
            <TextType
              text={[
                t(`hero_text1`),
                t(`hero_text2`),
                t(`hero_text3`),
                t(`hero_text4`),
              ]}
              as="h1"
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["#ffcc00", "#ffffff", "#026887"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
