import Image from 'next/image'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { titlesAnimation } from '../../data/useVariants'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaRegEnvelopeOpen,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const Contact = () => {
  const carouselRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ['start end', 'end start'],
  })

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), {
    stiffness: 50,
    mass: 0.6,
  })
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1]),
    { stiffness: 50, mass: 0.6 }
  )

  return (
    <section className="contact-section py-[60px] bg-[#F5FCFD] relative">
      <div className="hidden md:block md:absolute bottom-0 w-full h-[130px] bg-white right-0"></div>
      <div className="bg-[#013C50] absolute top-0 left-0 w-full md:w-4/5 bottom-0 h-full md:[clip-path:polygon(0_0,_100%_0%,_97%_100%,_0%_100%)]"></div>
      <div className="container mx-auto relative z-10 md:py-[120px]">
        <motion.div
          style={{ y, scale }}
          className="absolute -top-[150px] left-[145px] z-10 hidden md:block"
          ref={carouselRef}
        >
          <Image src="/icons/shape.svg" alt="shape" width={110} height={451} />
        </motion.div>
        <motion.h2
          variants={titlesAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-white font-bold uppercase text-[27px] text-center mb-[40px]"
        >
          CONTACTEZ-NOUS
        </motion.h2>
        <div className="bloc text-[16px] md:text-[21px] text-white flex flex-col items-center">
          <motion.div
            variants={titlesAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="md:w-2/5"
          >
            <div className="flex mb-[15px]">
              <span className="text-lightblue text-[26px] mr-[15px]">
                <FaPhoneAlt />
              </span>
              <div className="leading-[25px]">
                <span className="font-medium">PAR TÉLÉPHONE :</span> +212 661
                892 951
              </div>
            </div>

            <div className="flex mb-[15px]">
              <span className="text-lightblue text-[28px] mr-[15px]">
                <FaWhatsapp />
              </span>
              <div className="leading-[25px]">
                <span className="font-medium">PAR WHATSAPP :</span> +212 661 892
                951
              </div>
            </div>

            <div className="flex mb-[15px]">
              <span className="text-lightblue text-[26px] mr-[15px]">
                <FaRegEnvelopeOpen />
              </span>
              <div className="leading-[25px]">
                <span className="font-medium">PAR EMAIL :</span>{' '}
                <a
                  className="text-lightblue underline hover:text-white"
                  href="#"
                >
                  INFO@RESIDENCESAMANE.MA
                </a>
              </div>
            </div>

            <div className="flex mb-[15px]">
              <span className="text-lightblue text-[26px] mr-[15px]">
                <FaMapMarkerAlt />
              </span>
              <div className="leading-[25px]">
                <span className="font-medium">VISITEZ-NOUS : </span>{' '}
                <span>
                  Du Lundi au vendredi de 8h30 à 17h30 hors jours fériés. Au
                  Boulevard 11 Janvier, quartier Dakhla, Bloc D1, Agadir.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
