import useMediaQuery from "../../hooks/useMediaQuery"
import ImageCard from "../second-level/ImageCard";
import TextCard from "../second-level/TextCard";
import ImageTextCard from "../second-level/ImageTextCard";

import EggImageMobile from "../../assets/mobile/image-transform.jpg";
import EggImageDesktop from "../../assets/desktop/image-transform.jpg";
import CupImageMobile from "../../assets/mobile/image-stand-out.jpg";
import CupImageDesktop from "../../assets/desktop/image-stand-out.jpg";
import CherryImageMobile from "../../assets/mobile/image-graphic-design.jpg";
import CherryImageDesktop from "../../assets/desktop/image-graphic-design.jpg";
import OrangeImageMobile from "../../assets/mobile/image-photography.jpg";
import OrangeImageDesktop from "../../assets/desktop/image-photography.jpg";

import classes from "./Body.module.css"; 
const Body = () => {
  const isDesktop = useMediaQuery("(min-width: 750px)") 
 console.log(isDesktop); 
  return (
    <div className={classes.body}>
      <ImageCard photo={isDesktop ? EggImageDesktop : EggImageMobile} name="Egg" />
      <TextCard
        title="Transform your brand"
        paragraph="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        highlight="hsla(51, 100%, 49%, 0.2)"
        id="transform"
      />
      <ImageCard photo={isDesktop ? CupImageDesktop : CupImageMobile}  />
      <TextCard
        title="Stand out to the right audience"
        paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
        highlight="hsla(7, 99%, 70%, 0.2)"
      />
      <ImageTextCard
        photo={isDesktop ? CherryImageDesktop : CherryImageMobile} 
        title="Graphic Design"
        paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
        color="hsl(167, 40%, 24%)"
      />
      <ImageTextCard
        photo={isDesktop ? OrangeImageDesktop : OrangeImageMobile} 
        title="Photography"
        paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        color="hsl(198, 62%, 26%)"
      />
    </div>
  );
};

export default Body;
