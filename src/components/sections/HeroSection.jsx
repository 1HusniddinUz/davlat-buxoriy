import hero_bg from "../../assets/videos/hero_bg.mp4";
import "../../assets/HeroSection.css";

const HeroSection = () => {
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

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
