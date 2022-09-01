import React from 'react'
import { motion } from 'framer-motion'
import { globaleasing } from '../../data/useVariants'

const Popup = ({ handleClosePopup }) => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: '-50%',
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: globaleasing,
          },
        }}
        className="min-w-[50%] max-w-[50%] bg-white p-8 fixed left-0 translate-y-[-50%] right-0 top-[50%] my-auto mx-auto z-40"
      >
        <p>
          Dans une ville comme Agadir, devenue un grand pôle urbain et
          universitaire, recevant chaque année des centaines d’étudiantes venant
          des quatre coins du Royaume, notre résidence vient vous offrir une
          magique solution de logement tout inclus et avec cela une expérience
          humaine éminemment enrichissante et absolument singulière qui érige le
          crédo de la sécurité, la quiétude, le confort, la convivialité, et les
          belles valeurs du vivre ensemble et de la convivance harmonieuse et
          joyeuse afin de vous aider à atteindre la réussite dans chaque pas
          franchi durant votre parcours académique. En effet, notre résidence a
          été conçue en ayant anticipé tous vos besoins sans rien laisser au
          hasard afin de favoriser le confort, la satisfaction, l’épanouissement
          personnel, et la grande réussite du parcours de nos locataires. Nos
          locaux se distinguent avec brio grâce à l’espace spacieux de leurs
          chambres et appartements. Notre résidence s’étale sur une superficie
          globale de 10800 mètres carré et met à votre disposition un total de
          425 chambres et 880 lits. Notre résidence propose des espaces de vie
          où le confort est le maître mot, un lifestyle empreint de convivialité
          promettant une belle expérience humaine et immersive à sa communauté
          féminine. Une communauté rassemblée chez nous car nous partageons un
          objectif commun et une motivation collective : Réussir, exceller et
          briller de mille feux.
        </p>
      </motion.div>
      <motion.div
        onClick={handleClosePopup}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: globaleasing,
          },
        }}
        className="backdrop bg-[#000]/40 fixed top-0 bottom-0 left-0 right-0 my-auto mx-auto z-30"
      ></motion.div>
    </>
  )
}

export default Popup
