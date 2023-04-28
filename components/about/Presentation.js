import Image from 'next/image'
import React, { useRef } from 'react'
import Imgwrap from '../html/Imgwrap'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { fadeUp } from '../../data/useVariants'
import Reserverbtn from './Reserverbtn'

const Presentation = (props) => {
  const aboutref = useRef()
  const { scrollYProgress } = useScroll({
    target: aboutref,
  })

  const {
    presentationTexte,
    backgroundImage: { mediaItemUrl },
  } = props

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
              src={mediaItemUrl}
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
              <div className="text-justify about-intro">
                <div dangerouslySetInnerHTML={{ __html: presentationTexte }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
