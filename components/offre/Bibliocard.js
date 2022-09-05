import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  fadeIn,
  fadeUpOverlayBox,
  imgScaling,
  shortFadeUp,
  titesStagger,
} from '../../data/useVariants'

const Bibliocard = ({ item }) => {
  return (
    <div className="box pb-[50px] md:pb-[90px]">
      <motion.div
        variants={titesStagger(0, 0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex items-center mb-[30px] md:mb-[65px] title relative before:bg-[#09556F] before:-left-[26px] md:before:-left-[46px]"
      >
        <motion.div
          variants={shortFadeUp(1)}
          className="icon w-[41px] h-[37px] md:w-[51px] md:h-[47px] mr-[10px] md:mr-[22px] relative"
        >
          <Image alt="" src={item.icon} layout="fill" />
        </motion.div>
        <motion.h2
          variants={shortFadeUp(1)}
          className="text-[23px] md:text-[35px] md:leading-[40px] font-semibold uppercase"
        >
          {item.title}
        </motion.h2>
      </motion.div>

      <div className="flex flex-col items-end relative">
        <motion.div
          variants={fadeUpOverlayBox(1, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="overlay bg-white md:py-[35px] md:px-[40px] md:absolute bottom-0 left-0 z-10 max-w-[350px] order-2 md:order-1 text-justify md:text-left"
        >
          <motion.p
            variants={fadeIn(0.5, 0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {item.desc}
          </motion.p>
        </motion.div>
        <div className="w-full md:w-[85%] order-1 md:order-2 mb-[30px] md:mb-[0]">
          <div className="img h-[220px] md:h-[580px] relative overflow-hidden">
            <motion.div
              variants={imgScaling}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="h-[220px] md:h-[580px]"
            >
              <Image
                alt=""
                src="/remove/vue-1.jpg"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bibliocard
