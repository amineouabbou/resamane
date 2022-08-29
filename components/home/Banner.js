import React from 'react'
import Card from '../mainslider/Card'
import Sidenav from './Sidenav'
import { motion } from 'framer-motion'
import { PathBanneranim } from '../../data/useVariants'

const Banner = () => {
  return (
    <div className="main-screen-home relative pl-[90px]">
      <Sidenav />
      <motion.div
        variants={PathBanneranim}
        initial="initial"
        animate="animate"
        className="main-slideshow"
      >
        <Card />
      </motion.div>
    </div>
  )
}

export default Banner
