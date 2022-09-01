import Image from 'next/image'
import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  scrollYProgress,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { fadeIn, titesStagger, titlesAnimation } from '../../data/useVariants'
import Popup from '../html/Popup'

const Atouts = () => {
  const atoutRef = useRef(null)
  const [showPopup, setShowPopup] = useState(false)

  const handleClosePopup = () => {
    setShowPopup(!showPopup)
  }

  const { scrollYProgress } = useScroll({
    target: atoutRef,
    offset: ['start end', 'end end'],
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
      'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    ]
  )
  const maxWidth = useTransform(scrollYProgress, [0, 1], ['70%', '100%'])

  return (
    <section className="nos-atouts hidden md:block" ref={atoutRef}>
      <motion.div className="container mx-auto relative">
        <div className="absolute -bottom-[230px] left-[15px] z-50">
          <Image src="/icons/shape.svg" alt="shape" width={110} height={451} />
        </div>
        <motion.div className="inner bg-[#013C50] py-[100px] xl:[clip-path:polygon(2%_0%,_100%_0%,_100%_100%,_0%_100%)]">
          <motion.div
            variants={fadeIn(1, 0)}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="text-white font-bold uppercase text-[37px] text-center mb-[100px]"
          >
            NOS ATOUTS
          </motion.div>

          <motion.div
            variants={titesStagger}
            className="blocs w-2/3 mx-auto grid grid-cols-2 gap-x-20"
          >
            <motion.div
              variants={titlesAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              onClick={handleClosePopup}
              className="bloc text-white mb-[85px] flex flex-col items-center cursor-pointer group"
            >
              <div className="w-3/4 flex flex-col items-center text-center">
                <div className="icon mb-[50px]">
                  <Image
                    src="/icons/proximite.svg"
                    alt=""
                    width={130}
                    height={116}
                  />
                </div>
                <div className="uppercase font-semibold text-[28px] leading-[40px] mb-[10px] transition-all duration-300 group-hover:text-lightblue">
                  PROXIMITÉ
                </div>
                <div className="font-light text-[18px] leading-[24px]">
                  5 min de la faculté de médecine. <br />
                  5 min de l’ENCG.
                  <br />
                  13 min du centre ville.
                  <br />6 min de la gare routière
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={titlesAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              onClick={handleClosePopup}
              className="bloc text-white mb-[85px] flex flex-col items-center cursor-pointer group"
            >
              <div className="w-3/4 flex flex-col items-center text-center">
                <div className="icon mb-[50px]">
                  <Image
                    src="/icons/security.svg"
                    alt=""
                    width={97}
                    height={109}
                  />
                </div>
                <div className="uppercase font-semibold text-[28px] leading-[40px] mb-[10px] transition-all duration-300 group-hover:text-lightblue">
                  SÉCURITE
                </div>
                <div className="font-light text-[18px] leading-[24px]">
                  Résidences sécurisées 24h/24 <br /> et 7j/7
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={titlesAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              onClick={handleClosePopup}
              className="bloc text-white mb-[85px] flex flex-col items-center cursor-pointer group"
            >
              <div className="w-3/4 flex flex-col items-center text-center">
                <div className="icon mb-[50px] flex flex-col justify-center ">
                  <Image
                    src="/icons/comodities.svg"
                    alt=""
                    width={121}
                    height={126}
                  />
                </div>
                <div className="uppercase font-semibold text-[28px] leading-[40px] mb-[10px] transition-all duration-300 group-hover:text-lightblue">
                  COMMODITES
                </div>
                <div className="font-light text-[18px] leading-[24px]">
                  Supérette, GAB, pharmacie, laboratoires d’analyses médicales,
                  centre de copie, laverie…
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={titlesAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              onClick={handleClosePopup}
              className="bloc text-white mb-[85px] flex flex-col items-center group cursor-pointer"
            >
              <div className="w-3/4 flex flex-col items-center text-center">
                <div className="icon mb-[50px]">
                  <Image
                    src="/icons/happy-face.svg"
                    alt=""
                    width={126}
                    height={126}
                  />
                </div>
                <div className="uppercase font-semibold text-[28px] leading-[40px] mb-[10px] transition-all duration-300 group-hover:text-lightblue">
                  SÉRÉNITÉ
                </div>
                <div className="font-light text-[18px] leading-[24px]">
                  Hébergements spacieux
                  <br /> modernes équipés connectés, et <br /> espaces communs
                  pratiques.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showPopup && <Popup handleClosePopup={handleClosePopup} />}
      </AnimatePresence>
    </section>
  )
}

export default Atouts
