import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  imgScaling,
  fadeIn,
  fadeUpOverlayBox,
  globaleasing,
} from '../../../data/useVariants'

const imgSlash = {
  initial: { width: 0 },
  animate: {
    width: ['0%', '100%', '0%'],
    right: [null, 0, 0],
    transition: {
      duration: 2,
      ease: globaleasing,
    },
  },
}

const Aboutsection = ({ title, intro, photo, phrase }) => {
  return (
    <section className="pt-[60px] md:pt-0 intro-section">
      <div className="container mx-auto">
        {title && (
          <motion.div
            variants={fadeUpOverlayBox(1, 0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-[25px] md:text-[32px] leading-9 md:leading-[40px] uppercase font-bold mb-[20px] md:mb-[45px] origin-center"
          >
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </motion.div>
        )}
      </div>

      <div className="inner relative">
        <div className="md:absolute top-0 bottom-0 left-0 right-0 z-10 pb-[60px] md:pb-0">
          <div className="container mx-auto h-full relative">
            <motion.div
              variants={fadeUpOverlayBox(1, 0)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="overlay bg-white md:w-2/5 md:absolute bottom-0 right-0 md:p-[35px]"
            >
              {intro && (
                <motion.div
                  variants={fadeIn(0.8, 0.4)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {intro}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
        <div className="h-[280px] md:h-[475px] relative md:w-2/3 overflow-hidden">
          {photo?.mediaItemUrl && (
            <motion.div
              className="h-[280px] md:h-[475px]"
              variants={imgScaling}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src={photo?.mediaItemUrl}
                layout="fill"
                alt=""
                objectFit="cover"
              />
            </motion.div>
          )}
        </div>
      </div>

      <div className="md:w-2/3 mx-auto">
        <div className="cta relative pt-[60px] pb-[90px]">
          <div className="w-[79px] md:w-[99px] h-[34px] md:h-[64px] absolute -top-[15px] md:-top-[32px] left-[30px]">
            <Image src="/icons/quoate.svg" alt="" layout="fill" />
          </div>
          <div className="md:w-[190px] md:h-[123px] w-[150px] h-[83px]  absolute -bottom-[30px]  md:-bottom-[40px] right-[30px] md:right-[50px] scale-y-[-1]">
            <Image src="/icons/quoate.svg" layout="fill" alt="" />
          </div>
          <motion.div
            variants={fadeUpOverlayBox(1, 0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="uppercase leading-[30px] md:leading-[41px] font-medium text-center"
          >
            {phrase && (
              <span className="text-[22px] md:text-[32px]">{phrase}</span>
            )}
            <br />
            <span className="text-[31px] md:text-[41px] text-lightblue">
              RESIDENCES AMANE
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Aboutsection
