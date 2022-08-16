import Logo from "../../assets/svgs/Logo";
import Nav from "../second-level/Nav";

import classes from './Header.module.css'; 
const Header = () => {
    return(
        <div className={classes.header}>
        <Logo color="#fff" />
        <Nav parent="Header"/>
        </div>
    )
}

export default Header; 