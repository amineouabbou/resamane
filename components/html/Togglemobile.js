import { motion } from 'framer-motion'
import { globaleasing, titesStagger } from '../../data/useVariants'

const toggleStagger = {}

const toggleItem = {
  initial: {
    opacity: 0,
    scaleX: 0,
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1,
      ease: globaleasing,
    },
  },
}

const Togglemobile = () => {
  return (
    <motion.div
      variants={titesStagger(2, 0.2)}
      initial="initial"
      animate="animate"
      className="toggle-menu h-[15px] mx-auto flex-col justify-between cursor-pointer hidden"
    >
      <motion.div
        variants={toggleItem}
        className="w-[24px] h-[1px] bg-primary/80 origin-left"
      ></motion.div>
      <motion.div
        variants={toggleItem}
        className="w-[18px] h-[1px] bg-primary/80 origin-left"
      ></motion.div>
      <motion.div
        variants={toggleItem}
        className="w-[24px] h-[1px] bg-primary/80 origin-left"
      ></motion.div>
    </motion.div>
  )
}

export default Togglemobile
