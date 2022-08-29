import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

import Standnav from './html/Standnav'

const Navmain = () => {
  const carouselRef = useRef(null)

  const { scrollYProgress } = useScroll()

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="main-nav border-b-[1px] border-[#1D647D40] h-[65px] hidden items-center justify-center mb-[45px] md:flex md:flex-row relative">
      <motion.div className="h-[3px] right-0 mx-auto  absolute -bottom-[2px] left-0 bg-lightblue z-10 origin-left hidden"></motion.div>
      <Standnav />
    </div>
  )
}

export default Navmain
