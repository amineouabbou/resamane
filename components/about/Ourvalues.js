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
      <section className="py-[60px] md:pt-[110px] md:pb-[185px]">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="font-bold uppercase  text-[27px] md:text-[37px] text-center mb-[85px]"
          >
            NOS VALEURS
          </motion.h2>

          <div className="md:w-[75%]	mx-auto">
            <motion.div
              variants={titesStagger(0, 0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-y-16 md:gap-y-0 md:gap-x-[60px]"
            >
              <motion.div
                variants={fadeUp}
                className="cursor-pointer transition-all duration-300 hover:bg-[#F5FCFD] group"
                onClick={handleClosePopup}
              >
                <div className="md:mt-[80px] bloc flex flex-col justify-center items-center md:py-[50px]">
                  <div className="w-[51px] h-[83px] md:w-[91px] md:h-[123px] icone mb-5 md:mb-[35px] transition-all duration-300 group-hover:-translate-y-5 relative">
                    <Image
                      src="/icons/vitalite.svg"
                      alt="Securité"
                      layout="fill"
                    />
                  </div>
                  <div className="font-semibold uppercase text-[20px] md:text-[28px] transition-all delay-75 duration-300 group-hover:-translate-y-5">
                    VITALITÉ
                  </div>
                </div>
              </motion.div>

              <motion.div onClick={handleClosePopup} variants={fadeUp}>
                <div className="bloc flex flex-col justify-center items-center md:py-[50px] active cursor-pointer transition-all duration-300 hover:bg-[#F5FCFD] group">
                  <div className="w-[51px] h-[83px] md:w-[91px] md:h-[123px] icone mb-5 md:mb-[35px] transition-all duration-300 group-hover:-translate-y-5 relative">
                    <Image
                      src="/icons/security.svg"
                      alt="Securité"
                      layout="fill"
                    />
                  </div>
                  <div className="font-semibold uppercase text-[20px] md:text-[28px] transition-all delay-75 duration-300 group-hover:-translate-y-5">
                    SÉCURITÉ
                  </div>
                </div>
              </motion.div>

              <motion.div
                onClick={handleClosePopup}
                variants={fadeUp}
                className="md:mt-[80px]"
              >
                <div className="bloc flex flex-col justify-center items-center md:py-[50px] cursor-pointer transition-all duration-300 hover:bg-[#F5FCFD] group">
                  <div className="w-[71px] h-[83px] md:w-[91px] md:h-[123px] icone mb-5 md:mb-[35px] transition-all duration-300 group-hover:-translate-y-5 relative">
                    <Image
                      src="/icons/hand-shake.svg"
                      alt="Securité"
                      layout="fill"
                    />
                  </div>
                  <div className="font-semibold uppercase text-[20px] md:text-[28px] transition-all delay-75 duration-300 group-hover:-translate-y-5">
                    INTÉGRITÉ
                  </div>
                </div>
              </motion.div>

              <motion.div
                onClick={handleClosePopup}
                variants={fadeUp}
                className="md:mt-[40px]"
              >
                <div className="bloc flex flex-col justify-center items-center md:py-[50px] active cursor-pointer transition-all duration-300 hover:bg-[#F5FCFD] group">
                  <div className="w-[51px] h-[83px] md:w-[91px] md:h-[123px] icone mb-5 md:mb-[35px] transition-all duration-300 group-hover:-translate-y-5 relative">
                    <Image
                      src="/icons/quality.svg"
                      alt="Securité"
                      layout="fill"
                    />
                  </div>
                  <div className="font-semibold uppercase text-[20px] md:text-[28px] transition-all delay-75 duration-300 group-hover:-translate-y-5">
                    QUALITÉ
                  </div>
                </div>
              </motion.div>

              <motion.div onClick={handleClosePopup} variants={fadeUp}>
                <div className="bloc flex flex-col justify-center items-center md:py-[50px] cursor-pointer transition-all duration-300 hover:bg-[#F5FCFD] group">
                  <div className="w-[51px] h-[83px] md:w-[91px] md:h-[123px] icone mb-5 md:mb-[35px] transition-all duration-300 group-hover:-translate-y-5 relative">
                    <Image
                      src="/icons/diversite.svg"
                      alt="Securité"
                      layout="fill"
                    />
                  </div>
                  <div className="font-semibold uppercase text-[20px] md:text-[28px] transition-all delay-75 duration-300 group-hover:-translate-y-5">
                    DIVERSITÉ
                  </div>
                </div>
              </motion.div>

              <motion.div
                onClick={handleClosePopup}
                variants={fadeUp}
                className="md:mt-[40px]"
              >
                <div className="bloc flex flex-col justify-center items-center md:py-[50px] cursor-pointer transition-all duration-300 hover:bg-[#F5FCFD] group">
                  <div className="w-[61px] h-[83px] md:w-[91px] md:h-[123px] icone mb-5 md:mb-[35px] transition-all duration-300 group-hover:-translate-y-5 relative">
                    <Image
                      src="/icons/durabilite.svg"
                      alt="Securité"
                      layout="fill"
                    />
                  </div>
                  <div className="font-semibold uppercase text-[20px] md:text-[28px] transition-all delay-75 duration-300 group-hover:-translate-y-5">
                    DURABILITÉ
                  </div>
                </div>
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
