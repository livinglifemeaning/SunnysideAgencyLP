import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

import HamburgerIcon from "../../assets/svgs/HamburgerIcon";

import classes from "./Nav.module.css";

const Nav = (props) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 750px)");

  const handleToggleNavbar = () => {
    if (!isDesktop) {
      setToggleNavbar((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (isDesktop) {
      setToggleNavbar(true);
    }
  }, [isDesktop]);

  return (
    <div
      className={`${classes.nav} ${
        props.parent === "Footer" ? classes.footerNav : classes.headerNav
      } ${isDesktop ? classes.desktop : classes.mobile}`}
    >
      {props.parent === "Header" && !isDesktop && (
        <div onClick={handleToggleNavbar}>
          <HamburgerIcon />
        </div>
      )}

      {(props.parent === "Footer" ||
        (props.parent === "Header" && toggleNavbar)) && (
        <ul onClick={handleToggleNavbar}>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          {props.parent === "Header" && (
            <li className={classes.contact}>Contact</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Nav;
