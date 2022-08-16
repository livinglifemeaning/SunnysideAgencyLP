import useMediaQuery from "./hooks/useMediaQuery";
import {ParallaxProvider} from "react-scroll-parallax"; 

import Body from "./components/first-level/Body";
import Footer from "./components/first-level/Footer";
import Header from "./components/first-level/Header";
import Hero from "./components/first-level/Hero";
import ImageBar from "./components/first-level/ImageBar";
import Testimonials from "./components/first-level/Testimonials";
import HeaderImageMobile from './assets/mobile/image-header.jpg';
import HeaderImageDesktop from './assets/desktop/image-header.jpg';
const App = () => {
const isDesktop = useMediaQuery("(min-width: 750px)")
  return (
    <ParallaxProvider>
    <header style={{background: `center/${isDesktop ? "fit" : "cover"} url(${isDesktop ? HeaderImageMobile : HeaderImageDesktop}) no-repeat`}}>
      {/* <img className="headerImg" src={HeaderImageMobile} alt="" /> */}
      <Header/>
      <Hero/>
    </header>
    <main>
      <Body/> 
      <Testimonials/>
      <ImageBar/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </ParallaxProvider>
    
  );
}

export default App;
