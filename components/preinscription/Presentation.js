import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../data/useVariants'

const Presentation = () => {
  return (
    <section className="mb-[90px] mt-[70px]">
      <div className="w-[60%] mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="item">
            <motion.h2
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-[32px] font-bold leading-[37px]"
            >
              Pré-inscription
            </motion.h2>
          </div>

          <motion.div
            className="item"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Les Résidences Amane vous souhaite la bienvenue sur son nouveau
            site. Avec une capacité d’accueil de 880 lits répartis entre
            chambres standards, chambres pour personnes à besoins spécifiques et
            appartements. Les Résidences Amane vous offre une expérience de
            logement adaptée à vos besoins et comprenant une multitude de
            services et de commodités utiles et abordables avec un excellent
            rapport qualité/prix. Pour effectuer une demande d’inscription à nos
            résidences, nous vous invitons à renseigner le formulaire
            ci-dessous. Après avoir complété le formulaire, un email de
            confirmation vous sera envoyé.
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
