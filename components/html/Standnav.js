import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Standnav = () => {
  const router = useRouter()

  return (
    <ul className="flex flex-row items-center justify-center">
      <li className={router.pathname == '/' ? 'active' : ''}>
        <Link href="/">
          <a href="#">Accueil</a>
        </Link>
      </li>
      <li className={router.pathname == '/about' ? 'active' : ''}>
        <Link href="/about">
          <a href="#">Qui sommes-nous</a>
        </Link>
      </li>
      <li className={router.pathname == '/offre' ? 'active' : ''}>
        <Link href="/offre">
          <a href="#">Notre offre</a>
        </Link>
      </li>
      <li className={router.pathname == '/preinscription' ? 'active' : ''}>
        <Link href="/preinscription">
          <a href="#">Mon dossier</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a href="#">Ville d'agadir</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a href="#">Contact</a>
        </Link>
      </li>
    </ul>
  )
}

export default Standnav
