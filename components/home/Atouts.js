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

const DATA = [
  {
    url: '/icons/proximite.svg',
    title: 'PROXIMITÉ',
    desc: `5 min de l’ENCG
    <br />
    13 min du centre ville
    <br /> 6 min de la gare routière`,
  },
  {
    url: '/icons/security.svg',
    title: 'SÉCURITE',
    desc: `Résidences sécurisées
    <br /> 24h/24 <br /> et 7j/7`,
  },
  {
    url: '/icons/comodities.svg',
    title: 'COMMODITES',
    desc: `Supérette, GAB, pharmacie, laboratoires d’analyses médicales,
    centre de copie, laverie…`,
  },
  {
    url: '/icons/happy-face.svg',
    title: 'SÉRÉNITÉ',
    desc: `Hébergements spacieux
    <br /> modernes équipés connectés, et <br /> espaces communs
    pratiques.`,
  },
]

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
    <section className="nos-atouts" ref={atoutRef}>
      <motion.div className="container mx-auto relative px-0 md:px-[1rem]">
        <div className="absolute -bottom-[230px] hidden md:block left-[15px] z-50">
          <Image src="/icons/shape.svg" alt="shape" width={110} height={451} />
        </div>
        <motion.div className="inner bg-[#013C50] py-[60px] md:py-[100px] xl:[clip-path:polygon(2%_0%,_100%_0%,_100%_100%,_0%_100%)]">
          <Sectitle title="NOS ATOUTS" color="white" />

          <motion.div
            variants={titesStagger}
            className="blocs md:w-2/3 px-2 md:px-0 mx-auto grid grid-cols-2 gap-y-12 md:gap-x-20 md:gap-y-[80px]"
          >
            {DATA.map((item) => (
              <Atouitem
                key={item.title}
                item={item}
                handleClosePopup={handleClosePopup}
              />
            ))}
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
