import React from 'react'
import Card from '../mainslider/Card'
import Sidenav from './Sidenav'
import { motion } from 'framer-motion'
import { PathBanneranim } from '../../data/useVariants'
import Slider from 'react-slick'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="main-screen-home relative md:pl-[90px]">
      <Sidenav />

      <motion.div
        variants={PathBanneranim}
        initial="initial"
        animate="animate"
        className="main-slideshow"
      >
        <Slider {...settings}>
          <Card
            showread={true}
            photomobile="/remove/slider-1-mobile.jpg"
            photo="/remove/slider-1.jpg"
          />
          <Card
            showread={false}
            photomobile="/remove/slider-2-mobile.jpg"
            photo="/remove/slider-2.jpg"
          />
        </Slider>
      </motion.div>
    </div>
  )
}

export default Banner
