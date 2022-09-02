import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { titesStagger, shortFadeUp } from '../../data/useVariants'

const Standnav = () => {
  const router = useRouter()

  return (
    <motion.ul
      variants={titesStagger(0.6, 0.1)}
      initial="initial"
      animate="animate"
      className="flex flex-row items-center justify-center"
    >
      <motion.li
        variants={shortFadeUp()}
        className={router.pathname == '/' ? 'active' : ''}
      >
        <Link href="/">
          <a>Accueil</a>
        </Link>
      </motion.li>
      <motion.li
        variants={shortFadeUp()}
        className={router.pathname == '/about' ? 'active' : ''}
      >
        <Link href="/about">
          <a>Qui sommes-nous</a>
        </Link>
      </motion.li>
      <motion.li
        variants={shortFadeUp()}
        className={router.pathname == '/offre' ? 'active' : ''}
      >
        <Link href="/offre">
          <a>Notre offre</a>
        </Link>
      </motion.li>
      <motion.li
        variants={shortFadeUp()}
        className={router.pathname == '/mondossier' ? 'active' : ''}
      >
        <Link href="/mondossier">
          <a>Mon dossier</a>
        </Link>
      </motion.li>
      <motion.li variants={shortFadeUp()}>
        <a>{`Ville d'agadir`}</a>
      </motion.li>
      <motion.li variants={shortFadeUp()}>
        <Link href="/contact">
          <a href="#">Contact</a>
        </Link>
      </motion.li>
    </motion.ul>
  )
}

export default Standnav
