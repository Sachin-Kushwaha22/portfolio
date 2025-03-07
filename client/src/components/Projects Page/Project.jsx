import React, { useEffect, useRef } from 'react'
import './Project.css'

import { motion, useInView, useAnimation } from "framer-motion"
import Noise from '../../ReactBits/NoiseBg'

const framerMotion = {
    initial: { y: 75, opacity: 0, },
    whileInView: { y: 0, opacity: 1, transition: { delay: .1, duration: 1 } },
}

function Project() {

    // const ref = useRef(null)
    // const IsInView = useInView(ref,{once:true})
    // const scrollAnimation = useAnimation()

    // useEffect(()=>{
    //     if (IsInView) {
    //         scrollAnimation.start('whileInView')
    //     }
    // },[IsInView])

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)

    const IsInView1 = useInView(ref1, { once: true })
    const IsInView2 = useInView(ref2, { once: true })
    const IsInView3 = useInView(ref3, { once: true })
    const IsInView4 = useInView(ref4, { once: true })
    const IsInView5 = useInView(ref5, { once: true })
    const IsInView6 = useInView(ref6, { once: true })

    const scrollAnimation1 = useAnimation()
    const scrollAnimation2 = useAnimation()
    const scrollAnimation3 = useAnimation()
    const scrollAnimation4 = useAnimation()
    const scrollAnimation5 = useAnimation()
    const scrollAnimation6 = useAnimation()

    useEffect(() => {
        if (IsInView1) {
            scrollAnimation1.start('whileInView')
        }
    }, [IsInView1])

    useEffect(() => {
        if (IsInView2) {
            scrollAnimation2.start('whileInView')
            scrollAnimation1.start('whileInView')
        }
    }, [IsInView2])

    useEffect(() => {
        if (IsInView3) {
            scrollAnimation3.start('whileInView')
            scrollAnimation2.start('whileInView')
            scrollAnimation1.start('whileInView')
        }
    }, [IsInView3])

    useEffect(() => {
        if (IsInView4) {
            scrollAnimation4.start('whileInView')
            scrollAnimation3.start('whileInView')
            scrollAnimation2.start('whileInView')
            scrollAnimation1.start('whileInView')
        }
    }, [IsInView4])

    useEffect(() => {
        if (IsInView5) {
            scrollAnimation5.start('whileInView')
            scrollAnimation4.start('whileInView')
            scrollAnimation3.start('whileInView')
            scrollAnimation2.start('whileInView')
            scrollAnimation1.start('whileInView')
        }
    }, [IsInView5])

    useEffect(() => {
        if (IsInView6) {
            scrollAnimation6.start('whileInView')
            scrollAnimation5.start('whileInView')
            scrollAnimation4.start('whileInView')
            scrollAnimation3.start('whileInView')
            scrollAnimation2.start('whileInView')
            scrollAnimation1.start('whileInView')
        }
    }, [IsInView6])

    return (
        <div className='project-div'>
            {/* <Noise
                patternSize={1000}
                patternScaleX={1}
                patternScaleY={1}
                patternRefreshInterval={2}
                patternAlpha={15}
            /> */}
            <div className='project-inner-div'>
                
                <motion.div ref={ref1} initial='initial' animate={scrollAnimation1} variants={framerMotion} className="project-inner-div-heading">
                    <h1>PROJECTS</h1>
                    <p>These projects excel in animation, effective API handling, and great design, blending smooth visual transitions, easy data integration, and user-friendly interfaces.</p>
                </motion.div>

                <div className='project-boxes-1-layer layer-1'>
                    <motion.div ref={ref2} initial='initial' animate={scrollAnimation2} variants={framerMotion} className='project-box-1'>
                        <div className="project-box-1-profile">

                            <a href="" className='project-1-a project-1-a-visit'>Visit</a>
                            <a href="" className='project-1-a project-1-a-github'>GitHub Code</a>
                            <a href="" className='project-1-a project-1-a-arrow'><img src="src/assets/arrow.png" width='15px' /></a>

                        </div>
                        <div className="project-box-1-text">
                            <h1>Project 1</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui odio dolorum illo quidem eligendi ducimus voluptate dicta ab architecto, quam facilis distinctio, harum aliquid maiores incidunt repellendus dolores eius laudantium.</p>
                        </div>
                    </motion.div>

                    <motion.div ref={ref3} initial='initial' animate={scrollAnimation3} variants={framerMotion} className='project-box-1 project-box-2'>
                        <div className="project-box-1-profile">

                            <a href="" className='project-1-a project-1-a-visit'>Visit</a>
                            <a href="" className='project-1-a project-1-a-github'>GitHub Code</a>
                            <a href="" className='project-1-a project-1-a-arrow'><img src="src/assets/arrow.png" width='15px' /></a>

                        </div>
                        <div className="project-box-1-text">
                            <h1>Project 1</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui odio dolorum illo quidem eligendi ducimus voluptate dicta ab architecto, quam facilis distinctio, harum aliquid maiores incidunt repellendus dolores eius laudantium.</p>
                        </div>
                    </motion.div>
                </div>

                <div className='project-boxes-1-layer'>
                    <motion.div ref={ref4} initial='initial' animate={scrollAnimation4} variants={framerMotion} className='project-box-1'>
                        <div className="project-box-1-profile">

                            <a href="" className='project-1-a project-1-a-visit'>Visit</a>
                            <a href="" className='project-1-a project-1-a-github'>GitHub Code</a>
                            <a href="" className='project-1-a project-1-a-arrow'><img src="src/assets/arrow.png" width='15px' /></a>

                        </div>
                        <div className="project-box-1-text">
                            <h1>Project 1</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui odio dolorum illo quidem eligendi ducimus voluptate dicta ab architecto, quam facilis distinctio, harum aliquid maiores incidunt repellendus dolores eius laudantium.</p>
                        </div>
                    </motion.div>

                    <motion.div ref={ref5} initial='initial' animate={scrollAnimation5} variants={framerMotion} className='project-box-1 project-box-2'>
                        <div className="project-box-1-profile">

                            <a href="" className='project-1-a project-1-a-visit'>Visit</a>
                            <a href="" className='project-1-a project-1-a-github'>GitHub Code</a>
                            <a href="" className='project-1-a project-1-a-arrow'><img src="src/assets/arrow.png" width='15px' /></a>

                        </div>
                        <div className="project-box-1-text">
                            <h1>Project 1</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui odio dolorum illo quidem eligendi ducimus voluptate dicta ab architecto, quam facilis distinctio, harum aliquid maiores incidunt repellendus dolores eius laudantium.</p>
                        </div>
                    </motion.div>
                </div>

                <div className='project-boxes-1-layer layer-3'>
                    <motion.div ref={ref6} initial='initial' animate={scrollAnimation6} variants={framerMotion} className='project-box-1 layer-3-box'>
                        <div className="project-box-1-profile">

                            <a href="" style={{ color: 'white' }} className='project-1-a project-1-a-visit'>Visit</a>
                            <a href="" className='project-1-a project-1-a-github'>GitHub Code</a>
                            <a href="" className='project-1-a project-1-a-arrow'><img src="src/assets/arrow.png" width='15px' /></a>

                        </div>
                        <div className="project-box-1-text">
                            <h1>Project 1</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui odio dolorum illo quidem eligendi ducimus voluptate dicta ab architecto, quam facilis distinctio, harum aliquid maiores incidunt repellendus dolores eius laudantium.</p>
                        </div>
                    </motion.div>

                </div>


            </div>
        </div>
    )
}

export default Project