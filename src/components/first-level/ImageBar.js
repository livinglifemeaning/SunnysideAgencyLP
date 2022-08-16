import useMediaQuery from "../../hooks/useMediaQuery";

import MilkBottlesMobile from "../../assets/mobile/image-gallery-milkbottles.jpg";
import MilkBottlesDesktop from "../../assets/desktop/image-gallery-milkbottles.jpg";
import OrangeMobile from "../../assets/mobile/image-gallery-orange.jpg";
import OrangeDesktop from "../../assets/desktop/image-gallery-orange.jpg";
import ConeMobile from "../../assets/mobile/image-gallery-cone.jpg";
import ConeDesktop from "../../assets/desktop/image-gallery-cone.jpg";
import SugarCubesMobile from "../../assets/mobile/image-gallery-sugar-cubes.jpg";
import SugarCubesDesktop from "../../assets/desktop/image-gallery-sugarcubes.jpg";

import classes from "./ImageBar.module.css";

const ImageBar = () => {
  const isDesktop = useMediaQuery("(min-width: 750px)");
  let array; 
  isDesktop ? array = [MilkBottlesDesktop, OrangeDesktop, ConeDesktop, SugarCubesDesktop] : array = [MilkBottlesMobile, OrangeMobile, ConeMobile, SugarCubesMobile]; 
  return (
    <div className={classes.imageBar}>
      {array.map(
        (photo) => {
          return (
            <div className={classes.imageCard} key={photo}>
              <img src={photo} alt="" />
            </div>
          );
        }
      )}
    </div>
  );
};

export default ImageBar;
