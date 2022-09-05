import React from 'react'
import { motion } from 'framer-motion'
import { titlesAnimation, titesStagger } from '../../data/useVariants'
import Link from 'next/link'

const Cmsoverlay = ({ subtitle, title, showread }) => {
  return (
    <div className="overlay absolute bottom-[15px] md:bottom-[30px] left-[22%] md:left-[5%] z-10 flex flex-col justify-center items-center">
      <motion.div
        variants={titesStagger(0.7, 0.2)}
        initial="initial"
        animate="animate"
        className="bloc text-white"
      >
        <motion.div
          variants={titlesAnimation}
          className="mb-[8px] md:mb-[8px] md:leading-[60px] md:text-[35px] font-medium tracking-[7px] overflow-hidden hidden"
        >
          <span className="inline-block">Des résidences pour</span>
        </motion.div>
        <motion.div
          variants={titlesAnimation}
          className="font-bold text-[30px] leading-[32px] mb-[20px] md:leading-[58px] md:text-[55px] md:mb-[25px] overflow-hidden hidden"
        >
          <span className="inline-block">
            Étudiantes, Stagiaires,
            <br /> Jeunes actives et plus encore…
          </span>
        </motion.div>
        {showread && (
          <motion.div variants={titlesAnimation}>
            <Link href="/mondossier">
              <a className="btn w-[180px] mx-auto">Découvrir</a>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Cmsoverlay
