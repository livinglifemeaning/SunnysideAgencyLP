import Logo from "../../assets/svgs/Logo";
import Nav from "../second-level/Nav";
import SocialLinks from "../second-level/SocialLinks";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <Logo color="hsl(167, 40%, 24%)"/>
      <Nav parent="Footer" />
      <SocialLinks />
    </div>
  );
};

export default Footer;
