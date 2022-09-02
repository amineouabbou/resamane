import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { titesStagger, titlesAnimation } from '../../data/useVariants'

const CtaInscription = () => {
  return (
    <section className="bg-[#F5FCFD] py-[150px]">
      <motion.div
        variants={titesStagger(0, 0.6)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <motion.div
          variants={titlesAnimation}
          className="leading-[45px] text-[30px] text-center mb-[45px] font-medium"
        >
          HABITER LES RÉSIDENCES AMANE VOUS INTÉRESSE ? <br />
          <span className="text-lightblue font-bold">
            RÉSERVEZ VOTRE PLACE DÈS MAINTENANT !
          </span>
        </motion.div>
        <motion.div
          variants={titlesAnimation}
          className="cta flex flex-col items-center"
        >
          <Link href="/mondossier">
            <a className="btn w-[220px] outborder">PRÉ-INSCRIPTION</a>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CtaInscription
