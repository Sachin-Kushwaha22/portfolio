import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import './Stack.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Stack() {

    useEffect(() => {
        AOS.init({ duration: 300 })
    }, [])

    const ref = useRef(null);
    const IsInView = useInView(ref, { once: true })
    const startAnimation = useAnimation()

    useEffect(() => {

        if (IsInView) {
            startAnimation.start('show')
        }
    }, [IsInView])



    return (
        <div className='stack-page'>
            <div className='stack-box'>
                <div ref={ref} className='stack-box-in'
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 75,
                        },
                        show: {
                            opacity: 1,
                            y: 0,
                        }
                    }}

                    initial="hidden"
                    animate={startAnimation}
                    transition={{ duration: .5, delay: .2 }}
                >
                    <div data-aos="slide-right" className='stack-box-heading'>
                        <h1>TECH STACK I'M WORKING WITH</h1>
                    </div>

                    <div className='logo-slide'>
                        
                            <div className='slider'>
                                <img id='logo-img1' src="/assets/logoSlider/html.png" alt="html" />
                                <img id='logo-img2' src="/assets/logoSlider/css.png" alt="css" />
                                <img id='logo-img3' src="/assets/logoSlider/javascript.png" alt="javascript" />
                                <img id='logo-img4' src="/assets/logoSlider/reactjs.png" alt="react " />
                                <img id='logo-img5' src="/assets/logoSlider/expressjs.png" alt="ex " />
                                <img id='logo-img6' src="/assets/logoSlider/nodejs.png" alt="node " />
                                <img id='logo-img7' src="/assets/logoSlider/mongodb.png" alt="mongo " />
                                <img id='logo-img8' src="/assets/logoSlider/pg.png" alt="pg" />
                                <img id='logo-img9' src="/assets/logoSlider/github.png" alt="github " />
                                <img id='logo-img10' src="/assets/logoSlider/chatgpt-seeklogo.png" alt="chatgpt" />
                                <img id='logo-img1' src="/assets/logoSlider/html.png" alt="html" />
                                <img id='logo-img2' src="/assets/logoSlider/css.png" alt="css" />
                                <img id='logo-img3' src="/assets/logoSlider/javascript.png" alt="javascript" />
                                <img id='logo-img4' src="/assets/logoSlider/reactjs.png" alt="react " />
                                <img id='logo-img5' src="/assets/logoSlider/expressjs.png" alt="ex " />
                                <img id='logo-img6' src="/assets/logoSlider/nodejs.png" alt="node " />
                                <img id='logo-img7' src="/assets/logoSlider/mongodb.png" alt="mongo " />
                                <img id='logo-img8' src="/assets/logoSlider/pg.png" alt="pg" />
                                <img id='logo-img9' src="/assets/logoSlider/github.png" alt="github " />
                                <img id='logo-img10' src="/assets/logoSlider/chatgpt-seeklogo.png" alt="chatgpt" />
                            </div>
                            <div className='slider'>
                            <img id='logo-img1' src="/assets/logoSlider/html.png" alt="html" />
                                <img id='logo-img2' src="/assets/logoSlider/css.png" alt="css" />
                                <img id='logo-img3' src="/assets/logoSlider/javascript.png" alt="javascript" />
                                <img id='logo-img4' src="/assets/logoSlider/reactjs.png" alt="react " />
                                <img id='logo-img5' src="/assets/logoSlider/expressjs.png" alt="ex " />
                                <img id='logo-img6' src="/assets/logoSlider/nodejs.png" alt="node " />
                                <img id='logo-img7' src="/assets/logoSlider/mongodb.png" alt="mongo " />
                                <img id='logo-img8' src="/assets/logoSlider/pg.png" alt="pg" />
                                <img id='logo-img9' src="/assets/logoSlider/github.png" alt="github " />
                                <img id='logo-img10' src="/assets/logoSlider/chatgpt-seeklogo.png" alt="chatgpt" />
                                <img id='logo-img1' src="/assets/logoSlider/html.png" alt="html" />
                                <img id='logo-img2' src="/assets/logoSlider/css.png" alt="css" />
                                <img id='logo-img3' src="/assets/logoSlider/javascript.png" alt="javascript" />
                                <img id='logo-img4' src="/assets/logoSlider/reactjs.png" alt="react " />
                                <img id='logo-img5' src="/assets/logoSlider/expressjs.png" alt="ex " />
                                <img id='logo-img6' src="/assets/logoSlider/nodejs.png" alt="node " />
                                <img id='logo-img7' src="/assets/logoSlider/mongodb.png" alt="mongo " />
                                <img id='logo-img8' src="/assets/logoSlider/pg.png" alt="pg" />
                                <img id='logo-img9' src="/assets/logoSlider/github.png" alt="github " />
                                <img id='logo-img10' src="/assets/logoSlider/chatgpt-seeklogo.png" alt="chatgpt" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack