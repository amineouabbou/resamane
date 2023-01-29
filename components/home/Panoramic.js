import Image from 'next/image'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { globaleasing, titlesAnimation } from '../../data/useVariants'

import vuePanImg from '../../public/remove/360.jpg'
import playIcon from '../../public/icons/play.svg'
import { useRef, useState } from 'react'
import YouTube from 'react-youtube'
import CtaInscription from './CtaInscription'

const Panoramic = ({ titre, arrierePlan }) => {
  const el = useRef()
  const { scrollYProgress } = useScroll()
  const [showVideo, setShowVideo] = useState(false)

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 1,
    },
  }

  const handleShowVideo = () => {
    setShowVideo(true)
  }

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo()
  }

  const x = useTransform(scrollYProgress, [0, 1], [1, 1.3])

  const scale = useSpring(x, {
    stiffness: 50,
    mass: 0.2,
  })
  return (
    <>
      <section
        className="360-section relative min-h-[330px] md:min-h-[830px]"
        ref={el}
      >
        {showVideo && (
          <div className="youtube-video overlay absolute  h-full w-full left-0 right-0 z-10">
            <YouTube
              iframeClassName="iframe"
              videoId="Yvc8zWr1G6c"
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        )}

        {showVideo ? null : (
          <>
            <div className="overlay absolute  h-full w-full left-0 right-0 flex flex-col justify-end items-center z-10 bg-primary/25 bg-blend-darken">
              <div className="container mx-auto mb-[30px] md:mb-[60px]">
                <div className="bloc text-white flex justify-between items-center">
                  {titre && (
                    <motion.div
                      variants={titlesAnimation}
                      initial="initial"
                      whileInView="animate"
                      className="font-bold uppercase text-[25px] md:text-[55px] md:leading-[61px]"
                    >
                      <div dangerouslySetInnerHTML={{ __html: titre }} />
                    </motion.div>
                  )}

                  <motion.div
                    onClick={handleShowVideo}
                    initial={{ scale: 0 }}
                    whileInView={{
                      scale: 1,
                      transition: {
                        ease: globaleasing,
                        duration: 1,
                      },
                    }}
                  >
                    <a className="w-[50px] h-[50px] md:w-[144px] md:h-[144px] rounded-full bg-white/70 flex flex-col justify-center items-center hover:scale-125 hover:bg-white/90">
                      <i className="w-[16px] h-[16px] md:w-[26px] md:h-[26px] block relative">
                        <Image alt="" src={playIcon} layout="fill" />
                      </i>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="img relative min-h-[330px] md:min-h-[830px] overflow-hidden">
              <motion.div
                style={{ scale }}
                /*whileInView={{
            scale: 1.1,
            transition: {
              duration: 20,
            },
          }}*/
                className="block absolute h-full w-full origin-bottom"
              >
                {arrierePlan?.sourceUrl && (
                  <Image
                    alt=""
                    src={arrierePlan?.sourceUrl}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </motion.div>
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default Panoramic
