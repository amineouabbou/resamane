import Image from 'next/image'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { titlesAnimation } from '../../data/useVariants'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaRegEnvelopeOpen,
  FaMapPin,
} from 'react-icons/fa'

const Contact = ({ titre, listeContactRep }) => {
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

  const iconChooser = (exp) => {
    switch (exp) {
      case 'phone':
        return <FaPhoneAlt />
        break
      case 'whatsapp':
        return <FaWhatsapp />
        break
      case 'email':
        return <FaRegEnvelopeOpen />
        break
      case 'adresse':
        return <FaMapPin />
        break
      default:
    }
  }

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
          {titre}
        </motion.h2>
        <div className="bloc text-[15px] md:text-[21px] text-white flex flex-col items-center">
          <motion.div
            variants={titlesAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="md:w-2/5"
          >
            {listeContactRep.map((item) => (
              <div key={item.valeur} className="flex mb-[15px]">
                <span className="text-lightblue text-[20px] md:text-[26px] mr-[15px]">
                  {iconChooser(item.icone)}
                </span>
                <div className="leading-[25px]">
                  <span className="font-medium">{item.label} :</span>
                  {item.valeur}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
