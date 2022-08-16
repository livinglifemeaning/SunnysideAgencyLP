import {useState} from "react"; 
import Facebook from "../../assets/svgs/Facebook";
import Instagram from "../../assets/svgs/Instagram";
import Pinterest from "../../assets/svgs/Pinterest";
import Twitter from "../../assets/svgs/Twitter";

import classes from "./SocialLinks.module.css";
const SocialLinks = () => {
  const [linkColor, setLinkColor] = useState("hsl(167, 40%, 24%)")

  const handleHover = () => {
    setLinkColor("#fff"); 
  }

  const exitHover = () => {
    setLinkColor("hsl(167, 40%, 24%)")
  }
  return (
    <div className={classes.socialLinks}>
      <div onMouseEnter={handleHover} onMouseLeave={exitHover}><Facebook color={linkColor}/></div>
      <div onMouseEnter={handleHover} onMouseLeave={exitHover}><Instagram color={linkColor}/></div>
      <div onMouseEnter={handleHover} onMouseLeave={exitHover}><Pinterest color={linkColor}/></div>
      <div onMouseEnter={handleHover} onMouseLeave={exitHover}><Twitter color={linkColor}/></div>
    </div>
  );
};

export default SocialLinks;
