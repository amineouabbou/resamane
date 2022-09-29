import React from 'react'
import Card from '../mainslider/Card'
import Sidenav from './Sidenav'
import { motion } from 'framer-motion'
import { PathBanneranim } from '../../data/useVariants'
import Slider from 'react-slick'

const Banner = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="main-screen-home relative md:pl-[90px] overflow-hidden">
      <Sidenav />

      <motion.div
        variants={PathBanneranim}
        initial="initial"
        animate="animate"
        className="main-slideshow"
      >
        <Slider {...settings}>
          {slides.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </Slider>
      </motion.div>
    </div>
  )
}

export default Banner
