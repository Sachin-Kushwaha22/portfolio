import React, { useEffect } from 'react'
import { delay, motion } from "framer-motion"
import './Intro.css'
import './UiandResponsive.css'
import './ResponsiveHero.css'
import gsap from "gsap"
import Magnet from '../../ReactBits/Magnet.jsx'
import { TypeAnimation } from 'react-type-animation';
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP);

const fadeInUpAnimation = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1,
        },
    },
}

function Intro() {
    useEffect(() => {
        gsap.to('.intro-box', 1.7, {
            delay: 2.8,
            opacity: 1,
            x: 0,
            stagger: {
                amount: .5,
            },
            ease: "power4.inOut",
        })
    }, [])
    return (
        <>
            <motion.div initial={{ opacity: 0, x: -900 }} className='intro-box'>
                
                <h4 >FRONT-END DEVELOPER</h4>
                <motion.h1 initial='hidden' animate='show' variants={fadeInUpAnimation}>Hello, my name is <br /> Sachin Kushwaha.</motion.h1>
                
                <p>I’m a web developer who loves building websites that are easy to use and look great. I’m always learning and experimenting with new technologies to improve my skills and create even better projects. Looking to leverage my skills and knowledge in a challenging role to contribute to impactful projects.</p>

                <div className='hero-btns'>
                <Magnet padding={30} disabled={false} magnetStrength={2}>
                    <button id='projects-btn' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/projects';
                    }}>Projects</button>
                </Magnet>

                <Magnet padding={30} disabled={false} magnetStrength={2}>
                    <button id='linkedIn-btn' onClick={(e) => {
                        e.preventDefault();
                        window.open('https://www.linkedin.com/in/sachin-kushwaha-245055258/')
                    }}>LinkedIn</button>
                </Magnet>
                </div>
            </motion.div>

            {/* <div className="social-handler">
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div className="social-handler-icons">
                        <a href="https://www.instagram.com/rachet__sachin/"><img className="social-icons" src="src\assets\instagram.png" alt="instagram" /></a>
                        <a href="https://github.com/Sachin-Kushwaha22"><img className="social-icons" src="src\assets\github.png" alt="github" /></a>
                        <a href="https://www.linkedin.com/in/sachin-kushwaha-245055258/"><img className="social-icons" src="src\assets\linkedin.png" alt="linkedIn" /></a>
                    </div>
                    <p>© Sachin Kushwaha 2024</p>
                </div>
            </div> */}
        </>
    )
}

export default Intro