import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP);
import './Loader.css'
import { motion, stagger } from 'framer-motion';
import MetaBalls from './MetaBalls';

const animation = {
    hidden: {
        opacity: 0,
        duration: .5,
        y: 30,

    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: .5,
        },
    },
}

function Loader() {

    const overlayRef = useRef(null);

    useEffect(() => {
        const overlay = overlayRef.current;
        overlay.classList.add('overlay-add');

        setTimeout(() => {
            overlay.classList.add('overlay-remove');
        }, 4000);
    }, []);


    useEffect(() => {
        gsap.to(".counter", .25, {
            delay: 2.8,
            opacity: 0,
        })

        gsap.to(".bars", 1, {
            delay: 2.9,
            height: 0,
            // zIndex:2,
            stagger: {
                amount: 0.5,
            },
            ease: "power4.inOut",
        })

    }, [])

    return (
        <div>


            <MetaBalls
                color="#ffffff"
                cursorBallColor="#ffffff"
                cursorBallSize={2}
                ballCount={15}
                animationSize={30}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1}
                speed={0.3}
            />
            <motion.div initial='hidden' animate='show' variants={animation} className='counter'>Hello</motion.div>
            <div ref={overlayRef} className='overlay'>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
            </div>
        </div>
    )
}

export default Loader