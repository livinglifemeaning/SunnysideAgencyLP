import { Parallax } from 'react-scroll-parallax';

import ArrowDown from '../../assets/svgs/ArrowDown'; 
import classes from './Hero.module.css'; 
const Hero = () => {
    return(
        <>
        <h1 className={classes.title}>We Are Creatives</h1>
        <Parallax speed={-15}>
            <div className={classes.arrow}>
            <ArrowDown/>
            </div>
        </Parallax>
        </>
    )
};

export default Hero;
