import React from 'react'
import { motion } from 'framer-motion'
import { globaleasing } from '../../data/useVariants'

const Popup = ({ data, handleClosePopup }) => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: '-50%',
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: globaleasing,
          },
        }}
        exit={{
          opacity: 0,
          y: 100,
          transition: {
            duration: 0.6,
            ease: globaleasing,
          },
        }}
        className="max-w-[95%] min-w-[95%] md:min-w-[50%] md:max-w-[50%] bg-white p-3 md:p-8 fixed left-0 right-0 top-[50%] my-auto mx-auto z-[9999]"
      >
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </motion.div>
      <motion.div
        onClick={handleClosePopup}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: globaleasing,
          },
        }}
        exit={{ opacity: 0 }}
        className="backdrop bg-[#000]/50 fixed top-0 bottom-0 left-0 right-0 my-auto mx-auto z-40"
      ></motion.div>
    </>
  )
}

export default Popup
