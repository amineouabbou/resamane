import Image from 'next/image'
import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  scrollYProgress,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { titesStagger } from '../../data/useVariants'
import Popup from '../html/Popup'
import Sectitle from '../html/Sectitle'
import Atouitem from './Atouitem'

const Atouts = ({ titre, listeAtoutsRep }) => {
  const atoutRef = useRef(null)
  const [popupData, setPopupData] = useState('')

  const handleClosePopup = () => {
    setPopupData('')
  }

  const handlePopupClick = (data) => {
    setPopupData(data)
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
    <section className="nos-atouts" ref={atoutRef}>
      <motion.div className="container mx-auto relative px-0 md:px-[1rem]">
        <div className="absolute -bottom-[230px] hidden md:block left-[15px] z-50">
          <Image src="/icons/shape.svg" alt="shape" width={110} height={451} />
        </div>
        <motion.div className="inner bg-[#013C50] py-[60px] md:py-[100px] xl:[clip-path:polygon(2%_0%,_100%_0%,_100%_100%,_0%_100%)]">
          {titre && <Sectitle title={titre} color="white" />}

          <motion.div
            variants={titesStagger}
            className="blocs md:w-2/3 px-2 md:px-0 mx-auto grid grid-cols-2 gap-y-12 md:gap-x-20 md:gap-y-[80px]"
          >
            {listeAtoutsRep.map((item, index) => (
              <Atouitem
                key={item.titre}
                data={item}
                index={index}
                handlePopupClick={handlePopupClick}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {popupData && (
          <Popup handleClosePopup={handleClosePopup} data={popupData} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Atouts
