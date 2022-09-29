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
import Usepopup from '../html/Usepopup'

const DATA = [
  {
    id: 0,
    body: 'Avec notre dispositif de sécurité humain et technologique actif 24/7, garantir votre sécurité est avant tout l’une de nos priorités. ',
  },
  {
    id: 1,
    body: `Notre emplacement stratégique vous facilite l’accès aux établissements universitaires et lieux d’intérêt de la ville, avec une durée de trajet comprise entre 5 à 15min. `,
  },
  {
    id: 2,
    body: `Toute commodité nécessaire à vos besoins quotidiens est désormais accessible sur place, à quelques pas de votre logement. Nous mettons à votre disposition un parking privé, un restaurant, une mosquée, une bibliothèque, une médiathèque, une laverie, une infirmerie et bien d’autres services utiles à commander auprès de notre équipe sur place.`,
  },
  {
    id: 3,
    body: `Nos lieux de vie ont été conçus avec un esprit moderne fonctionnel favorisant le bien-être et la sérénité grâce aux espaces verts implantés avec amour dans différents coins du campus, et aux espaces de vie aménagés avec soin pour vous offrir calme et confort.`,
  },
]

const Atouts = ({ titre, listeAtoutsRep }) => {
  const atoutRef = useRef(null)
  const [popupData, setPopupData] = useState('')

  const handleClosePopup = () => {
    setPopupData('')
  }

  const handlePopupClick = (id) => {
    const found = DATA.find((item) => item.id == id)

    setPopupData(found.body)
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
