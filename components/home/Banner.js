import React from 'react'
import Card from '../mainslider/Card'
import Sidenav from './Sidenav'
import { motion } from 'framer-motion'
import { PathBanneranim } from '../../data/useVariants'
import Slider from 'react-slick'
import Navmain from '../Navmain'

const Banner = ({ slides, slogan }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="main-screen-home relative md:pl-[90px] ">
        <Sidenav slogan={slogan} />

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
      <Navmain />
    </>
  )
}

export default Banner
