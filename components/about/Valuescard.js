import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeUp } from '../../data/useVariants'

const Valuescard = ({ item, handleClosePopup }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="cursor-pointer transition-all duration-300 hover:bg-[#F5FCFD] group"
      onClick={handleClosePopup}
    >
      <div className="bloc flex flex-col justify-center items-center py-[50px]">
        <div className="w-[51px] h-[83px] md:w-[91px] md:h-[123px] icone mb-5 md:mb-[35px] transition-all duration-300 group-hover:-translate-y-5 relative">
          <Image src={item.url} alt="Securité" layout="fill" />
        </div>
        <div className="font-semibold uppercase text-[20px] md:text-[28px] transition-all delay-75 duration-300 group-hover:-translate-y-5">
          {item.title}
        </div>
      </div>
    </motion.div>
  )
}

export default Valuescard
