import { motion } from 'framer-motion'
import { fadeIn } from '../../data/useVariants'

const Sectitle = ({ title, color }) => {
  let classColor = ''
  if (color === 'white') {
    classColor = 'text-white'
  } else {
    classColor = 'text-primary'
  }
  return (
    <motion.div
      variants={fadeIn(1, 0)}
      whileInView="animate"
      initial="initial"
      viewport={{ once: true }}
      className={`${classColor} font-bold uppercase text-[27px] md:text-[37px] text-center mb-[70px] md:mb-[100px]`}
    >
      {title}
    </motion.div>
  )
}

export default Sectitle
