import Image from 'next/image'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeUp, titesStagger, globaleasing } from '../../data/useVariants'
import Popup from '../html/Popup'
import PopupText from '../html/PopupText'

const blocHover = {
  initial: {
    backgroundColor: '#fff',
  },
  animate: {
    backgroundColor: '#F5FCFD',
    transition: {
      duration: 0.3,
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
}

const fadeBg = {
  initial: {
    y: 0,
  },
  animate: {
    y: -20,
    color: '#00B1B7',
    transition: {
      duration: 0.6,
      ease: globaleasing,
    },
  },
}

const DATA = [
  {
    id: 0,
    body: 'Avec notre dispositif de sécurité humain et technologique actif 24/7, garantir votre sécurité est avant tout l’une de nos priorités. ',
  },
  {
    id: 1,
    body: `Notre mindset est orienté vitalité et jeunesse d’esprit. <br /> 
    Nous déployons tous nos efforts pour que Résidences Amane soit votre nouvelle source de belles énergies grâce à ses lieux de vie spacieux entourés d’espaces verts,                                        et votre source de bien-être à travers ses différents services pensés 
    pour vous offrir une vie commune saine et vive.`,
  },
  {
    id: 2,
    body: `L’intégrité est une valeur fondamentale à notre philosophie. <br /> 
    Nos équipes sont animées par toutes les valeurs que peut résumer le mot intégrité.<br /> 
    L’une de nos raisons d’être est d’offrir à nos résidentes un cadre de vie commune où l’on cultive la transparence et la confiance, et où la bonne conduite et 
    le respect de l’autre et du règlement interne sont nos exigences pour vous assurer
    une expérience authentique exclusive à Résidences Amane.`,
  },
  {
    id: 3,
    body: `Nous veillons à vous offrir une expérience de vie estudiantine incomparable dans la région, à travers le choix de qualité de nos équipements et espaces de vie, ainsi que nos services et commodités offerts dans les lieux de Résidences Amane.`,
  },
  {
    id: 4,
    body: `Chez Résidences Amane, nous croyons en les bienfaits des nouvelles rencontres<br /> 
    et la richesse des échanges interculturels, qui unissent, rassemblent, et créent des liens de fraternité et d’amitié.<br /> 
    Nous accueillons nos résidentes de toutes les villes du Royaume, et des quatre coins du monde pour une vie commune cosmopolite unique dans la région.`,
  },
  {
    id: 5,
    body: `Parmi nos raisons d’être est de contribuer au développement durable et social
    de la région, à travers ce nouvel esprit d’infrastructure Résidences Amane.<br /> 
    Nos lieux de vie sont non-fumeurs, et nos espaces verts sont éco-gérés.<br /> 
    Le respect des personnes et de nos espaces de vie, 
    est notre responsabilité partagée.`,
  },
]

const Ourvalues = (props) => {
  const [popupData, setPopupData] = useState('')

  const { sectionTitle, listeValeurs } = props

  const handleClosePopup = () => {
    setPopupData('')
  }

  const handlePopupClick = (data) => {
    setPopupData(data)
  }

  return (
    <>
      <section className="py-[60px] md:pt-[110px] md:pb-[185px]">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="font-bold uppercase  text-[27px] md:text-[37px] text-center mb-[85px]"
          >
            {sectionTitle}
          </motion.h2>

          <div className="md:w-[75%]	mx-auto">
            <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 md:gap-y-0 md:gap-x-[60px]">
              {listeValeurs.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="cursor-pointer transition-all duration-300 hover:bg-[#F5FCFD] group"
                  onClick={() => handlePopupClick(item.popupContenu)}
                >
                  <div className="bloc flex flex-col justify-center items-center md:py-[50px]">
                    <div className="w-[51px] h-[83px] md:w-[91px] md:h-[123px] icone mb-5 md:mb-[35px] transition-all duration-300 group-hover:-translate-y-5 relative">
                      <Image
                        src={item?.icone?.mediaItemUrl}
                        alt="Securité"
                        layout="fill"
                      />
                    </div>
                    <div className="font-semibold uppercase text-[20px] md:text-[28px] transition-all delay-75 duration-300 group-hover:-translate-y-5">
                      {item.titre}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {popupData && (
          <PopupText data={popupData} handleClosePopup={handleClosePopup} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Ourvalues
