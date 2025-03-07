
import React, { useEffect } from "react";
import "./ImageComponent.css";
import './UiandResponsive.css'
import { delay, motion } from "framer-motion"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP);

function ImageComponent() {
  useEffect(() => {
    gsap.to('.imageWrapper', 1.5, {
      delay: 3,
      autoAlpha: 1,
      x: 0,
      stagger: {
        amount: .5,
      },
      ease: "power4.inOut",
    })
  }, [])

  return (
    <motion.section initial={{ autoAlpha: 0, x: 1000 }} className='imageWrapper'>
      <div className='yellowBackground'>
        {/* <img
          
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb7fc9cde72e21b0a565ac70250416a1d5c97bf05da19f1d669f4b2c3be29040?placeholderIfAbsent=true&apiKey=0991894ae257472b9533e960c0523594"
          className='backgroundImage'
          alt=""
        /> */}

        <svg className='backgroundImage' xmlns="http://www.w3.org/2000/svg" width="819" height="699" viewBox="0 0 719 629" >
        <rect viewBox="0 0 819 699" width="839" height="699" fill="yellow" clipPath="url(#clip-shape)" />
          <defs>
            <clipPath id="clip-shape">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
                fill="#FDC435" />
            </clipPath>
          </defs>

        
          <image className="foregroundImage" id="img-inside-svg" href="src/assets/pic2.png" width="519" height="729" clip-path="url(#clip-shape)" preserveAspectRatio="xMidYMid slic"/>
        </svg>


      </div>
    </motion.section>
  );
}

export default ImageComponent;
