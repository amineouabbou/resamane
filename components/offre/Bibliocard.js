import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  fadeIn,
  fadeUpOverlayBox,
  imgScaling,
  shortFadeUp,
  titesStagger,
} from '../../data/useVariants'

const Bibliocard = ({ item, counter }) => {
  return (
    <div className=" box px-4 py-8 md-px-0 md:py-[60px] flex flex-col items-center odd:bg-[#F5FCFD] ">
      <div className="inner md:w-[60%]">
        <motion.div
          variants={titesStagger(0, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center title relative"
        >
          <motion.div
            variants={shortFadeUp(1)}
            className="icon w-[41px] h-[37px] md:w-[124px] md:h-[114px] relative mb-[45px]"
          >
            <Image alt="" src={item?.icone?.mediaItemUrl} layout="fill" />
          </motion.div>
          <motion.h2
            variants={shortFadeUp(1)}
            className="text-[23px] mb-[20px] md:text-[35px] md:leading-[40px] font-semibold uppercase"
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
            className=" text-justify md:text-center"
          >
            <motion.p
              variants={fadeIn(0.5, 0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <span
                dangerouslySetInnerHTML={{ __html: item.shortDescription }}
              />
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Bibliocard
