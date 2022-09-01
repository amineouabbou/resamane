import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { globaleasing } from '../data/useVariants'

import Standnav from './html/Standnav'

const Navmain = () => {
  const myRef = useRef(null)
  const [sticky, setSticky] = useState(false)

  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 50,
    mass: 0.2,
  })

  const handleScroll = () => {
    if (window.scrollY > myRef.current.offsetTop) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sticky])

  return (
    <>
      {sticky ? (
        <motion.div
          initial={{ y: -100 }}
          animate={{
            y: 0,
            transition: {
              duration: 1,
              ease: globaleasing,
            },
          }}
          className={`fixed top-0 z-20 bg-white main-nav border-b-[1px] border-[#1D647D40] w-full h-[70px] hidden items-center justify-center mb-[45px] md:flex md:flex-row `}
        >
          <motion.div
            style={{ scaleX }}
            className="h-[4px] rounded-[10px] right-0 mx-auto  absolute -bottom-[2px] left-0 bg-lightblue z-10 origin-center"
          ></motion.div>
          <Standnav />
        </motion.div>
      ) : null}

      <div
        ref={myRef}
        className={`bg-white main-nav border-b-[1px] border-[#1D647D40] w-full h-[65px] hidden items-center justify-center mb-[45px] md:flex md:flex-row `}
      >
        <Standnav />
      </div>
    </>
  )
}

export default Navmain
