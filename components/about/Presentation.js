import Image from 'next/image'
import React, { useRef } from 'react'
import Imgwrap from '../html/Imgwrap'
import Reserverbtn from './Reserverbtn'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { fadeUp } from '../../data/useVariants'

const Presentation = () => {
  const aboutref = useRef()
  const { scrollYProgress } = useScroll({
    target: aboutref,
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -120])

  const y = useSpring(x, {
    stiffness: 50,
    mass: 0.2,
  })
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 4]), {
    stiffness: 50,
    mass: 0.2,
  })

  return (
    <section className="about" ref={aboutref}>
      <div className="relative pl-[5px] md:pl-[60px]">
        <div className="img h-[340px] md:h-[640px] [clip-path:polygon(3%_0,_100%_0,_100%_100%,_0_100%)] overflow-hidden relative">
          <Imgwrap duration="1">
            <Image
              src="/remove/slide-1-old.png"
              layout="fill"
              alt="slider"
              objectFit="cover"
            />
          </Imgwrap>
        </div>
      </div>

      <div className="bg-[#013C50] py-[60px]  md:pt-[80px] md:pb-[120px] relative">
        <Reserverbtn />
        <div className="container mx-auto relative">
          <motion.div
            style={{ y, rotate }}
            className="absolute -top-[240px] right-10 z-10 hidden md:block"
          >
            <Image
              src="/icons/shape.svg"
              alt="shape"
              width={110}
              height={451}
            />
          </motion.div>
          <div className="md:w-6/12	mx-auto">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-justify">
                <p>
                  Émanation du Groupe d’entreprises Joumani, la Fondation Ain
                  Salsabil dédie son premier campus résidentiel étudiant aux
                  jeunes filles souhaitant vivre à Agadir,et le baptise
                  <span className="font-bold"> Résidences Amane</span>.
                  <br />
                  <br />
                  Cette association caritative engagée depuis des années partout
                  au Maroc, pour des actions à caractères sociales et
                  humanitaires, lance ce campus multi-services inclusif et
                  fonctionnel, dans le but de contribuer à l’amélioration du
                  standing des infrastructures estudiantines de la région, et
                  offrir aux résidentes un cadre de vie moderne propice à leur
                  épanouissement intellectuel social et personnel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
