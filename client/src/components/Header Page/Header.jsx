
import React, { useEffect } from "react";
import "./Header.css";
import './UiandResponsive.css'
import './ResponsiveHero.css'
import './ImageComponent.css'
// import Loader from "./Loader.jsx";
import ImageComponent from "./ImageComponent.jsx";
import Intro from "./Intro.jsx";
import SwitchTheme from './SwitchTheme.jsx'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP);
import { motion, stagger } from 'framer-motion';
import Magnet from '../../ReactBits/Magnet.jsx'

function Header() {
  useEffect(() => {
    gsap.to('.header', 1.5, {
      delay: 3.2,
      opacity: 1,
      y: 20,
      stagger: {
        amount: .5,
      },
      ease: "power4.inOut",
    })
  }, [])
  return (
    <div className="hero-page">
      <div className="image-div">
        <ImageComponent />
      </div>
      <div style={{ height: '100vh', maxHeight: '100vh' }} className="bgc">
        <motion.header initial={{ opacity: 0, y: -100 }} className='header'>



          <Magnet padding={70} disabled={false} magnetStrength={2}>
            <a className='logo'>Sachin Kushwaha</a>
          </Magnet>

          {/* <nav className='nav'>
            <Magnet padding={20} disabled={false} magnetStrength={2}>
              <a className="a-tag" href="/about">About</a>
            </Magnet>
            <Magnet padding={20} disabled={false} magnetStrength={2}>
              <a className="a-tag" href="/projects">Projects</a>
            </Magnet>
            <Magnet padding={20} disabled={false} magnetStrength={2}>
              <a className="a-tag" href="/resume">Resume</a>
            </Magnet>



          </nav> */}
        </motion.header>
        <Intro />
        {/* <SwitchTheme /> */}
      </div>
    </div>
  );
}

export default Header;
