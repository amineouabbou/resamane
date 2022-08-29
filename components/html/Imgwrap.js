import React from 'react'
import { motion } from 'framer-motion'
import { globaleasing } from '../../data/useVariants'

const Imgwrap = ({ children, duration }) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto">
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{
          opacity: 0,
          transition: {
            duration,
          },
        }}
        viewport={{ once: true }}
        className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto z-10 bg-primary"
      ></motion.div>
      {children}
    </div>
  )
}

export default Imgwrap
