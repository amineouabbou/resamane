import { motion } from 'framer-motion'
import Image from 'next/image'
import { titlesAnimation } from '../../data/useVariants'

const Atouitem = ({ data, handlePopupClick, index }) => {
  return (
    <motion.div
      variants={titlesAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      onClick={() => handlePopupClick(index)}
      className="bloc text-white flex flex-col items-center cursor-pointer group"
    >
      <div className="md:w-3/4 flex flex-col items-center text-center">
        {data?.icone?.sourceUrl && (
          <div className="icon w-[70px] md:w-[130px] h-[82px] md:h-[116px] mb-[20px] md:mb-[50px] transition-all duration-500 group-hover:-translate-y-4 relative">
            <Image src={data?.icone?.sourceUrl} alt="" layout="fill" />
          </div>
        )}

        {data?.titre && (
          <div className="uppercase font-semibold text-[19px] md:text-[28px] leading-[40px] md:mb-[10px] transition-all duration-500 delay-75 group-hover:text-lightblue group-hover:-translate-y-4">
            {data?.titre}
          </div>
        )}

        <div className="font-light md:text-[18px] leading-[19px] md:leading-[24px] transition-all duration-500 delay-100 group-hover:-translate-y-4 group-hover:text-white/20">
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>
    </motion.div>
  )
}

export default Atouitem
