import Image from 'next/image'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { globaleasing, titlesAnimation } from '../../data/useVariants'

import vuePanImg from '../../public/remove/360.jpg'
import playIcon from '../../public/icons/play.svg'
import { useRef } from 'react'

const Panoramic = () => {
  const el = useRef()
  const { scrollYProgress } = useScroll()

  const x = useTransform(scrollYProgress, [0, 1], [1, 1.3])

  const scale = useSpring(x, {
    stiffness: 50,
    mass: 0.2,
  })
  return (
    <section className="360-section relative hidden md:block" ref={el}>
      <div className="overlay absolute h-full w-full left-0 right-0 flex flex-col justify-end items-center z-10 bg-primary/25 bg-blend-darken">
        <div className="container mx-auto mb-[60px]">
          <div className="bloc text-white flex justify-between items-center">
            <motion.div
              variants={titlesAnimation}
              initial="initial"
              whileInView="animate"
              className="font-bold uppercase text-[55px] leading-[61px]"
            >
              Visite 360 <br /> de la résidence
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  ease: globaleasing,
                  duration: 1,
                },
              }}
            >
              <a
                className="w-[144px] h-[144px] rounded-full bg-white/70 flex flex-col justify-center items-center hover:scale-125 hover:bg-white/90"
                href="#"
              >
                <i className="block">
                  <Image alt="" src={playIcon} width="26px" />
                </i>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="img relative min-h-[830px] overflow-hidden">
        <motion.div
          style={{ scale }}
          /*whileInView={{
            scale: 1.1,
            transition: {
              duration: 20,
            },
          }}*/
          className="block absolute h-full w-full origin-bottom"
        >
          <Image alt="" src={vuePanImg} layout="fill" objectFit="cover" />
        </motion.div>
      </div>
    </section>
  )
}

export default Panoramic
