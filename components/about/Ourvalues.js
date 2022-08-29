import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, titesStagger } from '../../data/useVariants'

const Ourvalues = () => {
  return (
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
            <motion.div variants={fadeUp} className="mt-[80px]">
              <div className="bloc flex flex-col justify-center items-center py-[50px]">
                <div className="icone mb-[35px]">
                  <Image
                    src="/icons/vitalite.svg"
                    alt="Securité"
                    width={91}
                    height={123}
                  />
                </div>
                <div className="font-semibold uppercase text-[28px]">
                  VITALITÉ
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="bloc flex flex-col justify-center items-center py-[50px] active bg-[#F5FCFD]">
                <div className="icone mb-[35px]">
                  <Image
                    src="/icons/security.svg"
                    alt="Securité"
                    width={97}
                    height={108}
                  />
                </div>
                <div className="font-semibold uppercase text-[28px]">
                  SÉCURITÉ
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-[80px]">
              <div className="bloc flex flex-col justify-center items-center py-[50px]">
                <div className="icone mb-[35px]">
                  <Image
                    src="/icons/hand-shake.svg"
                    alt="Securité"
                    width={180}
                    height={115}
                  />
                </div>
                <div className="font-semibold uppercase text-[28px]">
                  INTÉGRITÉ
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-[40px]">
              <div className="bloc flex flex-col justify-center items-center py-[50px] active bg-[#F5FCFD]">
                <div className="icone mb-[35px]">
                  <Image
                    src="/icons/quality.svg"
                    alt="Securité"
                    width={91}
                    height={123}
                  />
                </div>
                <div className="font-semibold uppercase text-[28px]">
                  QUALITÉ
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="bloc flex flex-col justify-center items-center py-[50px] active">
                <div className="icone mb-[35px]">
                  <Image
                    src="/icons/diversite.svg"
                    alt="Securité"
                    width={116}
                    height={117}
                  />
                </div>
                <div className="font-semibold uppercase text-[28px]">
                  DIVERSITÉ
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-[40px]">
              <div className="bloc flex flex-col justify-center items-center py-[50px] bg-[#F5FCFD]">
                <div className="icone mb-[35px]">
                  <Image
                    src="/icons/durabilite.svg"
                    alt="Securité"
                    width={116}
                    height={116}
                  />
                </div>
                <div className="font-semibold uppercase text-[28px]">
                  DURABILITÉ
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Ourvalues
