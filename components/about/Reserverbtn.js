import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { globaleasing } from '../../data/useVariants'
import { useTranslation } from 'next-i18next'

const bookIntroAnimation = {
  initial: {
    x: '-100%',
  },
  animate: {
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
      ease: globaleasing,
    },
  },
}

const bookElementStagger = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
}

const bookElement = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

const Reserverbtn = () => {
  const { scrollYProgress } = useScroll()
  const { t } = useTranslation('common')

  const x = useTransform(scrollYProgress, [0, 1], [0, 1])

  const scaleX = useSpring(x, {
    stiffness: 50,
    mass: 0.2,
  })
  return (
    <Link href="/mondossier">
      <motion.div
        variants={bookIntroAnimation}
        initial="initial"
        animate="animate"
        className="reserver  bg-white fixed top-[50%] left-0 drop-shadow-[0_13px_16px_rgba(0,0,0,0.15)] z-50 [clip-path:polygon(0_0,_89%_0,_100%_100%,_0%_100%)]"
      >
        <motion.div
          style={{ scaleX }}
          className="loader rounded-[10px] absolute h-[2px] md:h-[4px] bottom-[2px] left-0 right-0 bg-lightblue"
        ></motion.div>
        <motion.div
          variants={bookElementStagger}
          initial="initial"
          animate="animate"
          className="inner group w-[120px] md:w-[180px] relative h-[90px] md:h-[120px] flex flex-col items-center justify-center transition-all hover:bg-lightblue border-[#084C6419] border-[1px] "
        >
          <motion.div
            variants={bookElement}
            className="icon mb-[3px] group-hover:brightness-0 group-hover:invert  transition-all"
          >
            <div className="relative">
              <Image alt="" width={25} height={25} src="/icons/calendar.svg" />
            </div>
          </motion.div>
          <motion.div
            variants={bookElement}
            className="text-[12px] md:text-[16px] px-[30px] leading-4 md:leading-[21px] font-semibold text-center group-hover:text-white transition-all uppercase"
          >
            {t('Reserver maintenant')}
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default Reserverbtn
