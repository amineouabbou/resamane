import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { titesStagger, titlesAnimation } from '../../data/useVariants'

const CtaInscription = (props) => {
  const { titre, sousTitre, bouttonGroup } = props
  return (
    <section className="bg-[#F5FCFD] py-[60px] md:py-[150px]">
      <motion.div
        variants={titesStagger(0, 0.6)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto uppercase"
      >
        <motion.div
          variants={titlesAnimation}
          className="leading-[35px] md:leading-[45px] text-[25px] md:text-[30px] text-center mb-[35px] md:mb-[45px] font-medium"
        >
          <div dangerouslySetInnerHTML={{ __html: titre }} />
          <div
            className="text-lightblue font-bold"
            dangerouslySetInnerHTML={{ __html: sousTitre }}
          />
        </motion.div>
        <motion.div
          variants={titlesAnimation}
          className="cta flex flex-col items-center"
        >
          <Link href={bouttonGroup.url}>
            <a className="btn outborder">{bouttonGroup.label}</a>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CtaInscription
