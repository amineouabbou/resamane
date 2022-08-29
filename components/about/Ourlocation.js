import Image from 'next/image'
import React from 'react'
import Cardmap from './Cardmap'
import { motion } from 'framer-motion'
import { fadeUp, titesStagger, globaleasing } from '../../data/useVariants'

const Ourlocation = () => {
  return (
    <section className="pt-[125px] relative">
      <div className="absolute bg-[#F5FCFD] top-0 h-full left-0 w-[88%] xl:[clip-path:polygon(0_0,_100%_0%,_96%_100%,_0%_100%)]"></div>
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
          className="absolute -top-[280px] left-60 z-10"
        >
          <Image src="/icons/shape.svg" alt="shape" width={110} height={451} />
        </motion.div>
        <motion.div
          variants={titesStagger(0, 0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-2/5 mx-auto mb-[65px]"
        >
          <motion.h2
            variants={fadeUp}
            className="font-bold uppercase text-[37px] text-center mb-[40px]"
          >
            NOTRE EMPLACEMENT
          </motion.h2>
          <motion.div variants={fadeUp} className="px-[20px]">
            <p className="text-center">
              Notre résidence est située sur le Boulevard 11 Janvier, près de
              l’École Nationale d’Architecture, la Faculté des Sciences
              Juridiques Économiques et Sociales et en face de McDonald’s Adrar.
              Cet emplacement lui confrère de nombreux avantages, à savoir un
              environnement estudiantin spécial, propice à la concentration sur
              les objectifs liés à la réussite et à l’excellence, en plus d’un
              accès pratique et rapide à la route nationale N 1.
            </p>
          </motion.div>
        </motion.div>

        <Cardmap />
      </div>
    </section>
  )
}

export default Ourlocation
