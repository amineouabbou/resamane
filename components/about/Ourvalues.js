import Image from 'next/image'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeUp, titesStagger, globaleasing } from '../../data/useVariants'
import Popup from '../html/Popup'

const blocHover = {
  initial: {
    backgroundColor: '#fff',
  },
  animate: {
    backgroundColor: '#F5FCFD',
    transition: {
      duration: 0.3,
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
}

const fadeBg = {
  initial: {
    y: 0,
  },
  animate: {
    y: -20,
    color: '#00B1B7',
    transition: {
      duration: 0.6,
      ease: globaleasing,
    },
  },
}

const Ourvalues = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleClosePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <>
      <section className="pt-[110px] pb-[185px]">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="font-bold uppercase text-[37px] text-center mb-[85px]"
          >
            NOS VALEURS
          </motion.h2>

          <div className="w-[75%]	mx-auto">
            <motion.div
              variants={titesStagger(0, 0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-x-[60px]"
            >
              <motion.div
                variants={fadeUp}
                className="mt-[80px] cursor-pointer"
                onClick={handleClosePopup}
              >
                <motion.div
                  variants={blocHover}
                  initial="initial"
                  whileHover="animate"
                  className="bloc flex flex-col justify-center items-center py-[50px]"
                >
                  <motion.div className="icone mb-[35px]" variants={fadeBg}>
                    <Image
                      src="/icons/vitalite.svg"
                      alt="Securité"
                      width={91}
                      height={123}
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeBg}
                    className="font-semibold uppercase text-[28px]"
                  >
                    VITALITÉ
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div onClick={handleClosePopup} variants={fadeUp}>
                <motion.div
                  variants={blocHover}
                  initial="initial"
                  whileHover="animate"
                  className="bloc flex flex-col justify-center items-center py-[50px] active bg-[#F5FCFD]"
                >
                  <motion.div variants={fadeBg} className="icone mb-[35px]">
                    <Image
                      src="/icons/security.svg"
                      alt="Securité"
                      width={97}
                      height={108}
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeBg}
                    className="font-semibold uppercase text-[28px]"
                  >
                    SÉCURITÉ
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                onClick={handleClosePopup}
                variants={fadeUp}
                className="mt-[80px]"
              >
                <motion.div
                  variants={blocHover}
                  initial="initial"
                  whileHover="animate"
                  className="bloc flex flex-col justify-center items-center py-[50px]"
                >
                  <motion.div variants={fadeBg} className="icone mb-[35px]">
                    <Image
                      src="/icons/hand-shake.svg"
                      alt="Securité"
                      width={180}
                      height={115}
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeBg}
                    className="font-semibold uppercase text-[28px]"
                  >
                    INTÉGRITÉ
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                onClick={handleClosePopup}
                variants={fadeUp}
                className="mt-[40px]"
              >
                <motion.div
                  variants={blocHover}
                  initial="initial"
                  whileHover="animate"
                  className="bloc flex flex-col justify-center items-center py-[50px] active bg-[#F5FCFD]"
                >
                  <motion.div variants={fadeBg} className="icone mb-[35px]">
                    <Image
                      src="/icons/quality.svg"
                      alt="Securité"
                      width={91}
                      height={123}
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeBg}
                    className="font-semibold uppercase text-[28px]"
                  >
                    QUALITÉ
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div onClick={handleClosePopup} variants={fadeUp}>
                <motion.div
                  variants={blocHover}
                  initial="initial"
                  whileHover="animate"
                  className="bloc flex flex-col justify-center items-center py-[50px] active"
                >
                  <motion.div variants={fadeBg} className="icone mb-[35px]">
                    <Image
                      src="/icons/diversite.svg"
                      alt="Securité"
                      width={116}
                      height={117}
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeBg}
                    className="font-semibold uppercase text-[28px]"
                  >
                    DIVERSITÉ
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                onClick={handleClosePopup}
                variants={fadeUp}
                className="mt-[40px]"
              >
                <motion.div
                  variants={blocHover}
                  initial="initial"
                  whileHover="animate"
                  className="bloc flex flex-col justify-center items-center py-[50px] bg-[#F5FCFD]"
                >
                  <motion.div variants={fadeBg} className="icone mb-[35px]">
                    <Image
                      src="/icons/durabilite.svg"
                      alt="Securité"
                      width={116}
                      height={116}
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeBg}
                    className="font-semibold uppercase text-[28px]"
                  >
                    DURABILITÉ
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showPopup && <Popup handleClosePopup={handleClosePopup} />}
      </AnimatePresence>
    </>
  )
}

export default Ourvalues
