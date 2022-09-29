import Image from 'next/image'
import React from 'react'
import Cardmap from './Cardmap'
import { motion } from 'framer-motion'
import { fadeUp, titesStagger, globaleasing } from '../../data/useVariants'

const Ourlocation = () => {
  return (
    <section className="py-[60px] md:pt-[125px] relative">
      <div className="absolute bg-[#F5FCFD] top-0 h-full left-0 w-full md:w-[88%] xl:[clip-path:polygon(0_0,_100%_0%,_96%_100%,_0%_100%)]"></div>
      <div className="absolute h-[130px] bg-white w-full bottom-0"></div>
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: globaleasing,
              duration: 2,
              delay: 1,
            },
          }}
          viewport={{ once: true }}
          className="absolute -top-[280px] left-60 hidden z-10 md:block"
        >
          <Image src="/icons/shape.svg" alt="shape" width={110} height={451} />
        </motion.div>
        <motion.div
          variants={titesStagger(0, 0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="md:w-2/5 mx-auto mb-[40px] md:mb-[65px]"
        >
          <motion.h2
            variants={fadeUp}
            className="font-bold uppercase text-[27px] md:text-[37px] text-center mb-[40px]"
          >
            NOTRE EMPLACEMENT
          </motion.h2>
          <motion.div variants={fadeUp} className="md:px-[20px]">
            <p className="text-justify md:text-center">
              Vous allez vivre dans un quartier estudiantin calme et sécurisé.
              Et pour vos éventuels déplacements, le quartier est facilement
              accessible à tous les lieux susceptibles de vous intéresser à
              Agadir.
              <br /> Notre résidence est située sur le Boulevard 11 Janvier, à
              deux pas de l’École Nationale d’Architecture, et de la Faculté des
              Sciences Juridiques Économiques et Sociales et en face de
              McDonald’s Adrar.
              <br /> Retenez également l’accès pratique et express à la route
              nationale N 1, ainsi que votre proximité de l’aéroport et de la
              gare routière de la ville d’Agadir.
            </p>
          </motion.div>
        </motion.div>

        <Cardmap />
      </div>
    </section>
  )
}

export default Ourlocation
