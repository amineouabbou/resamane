import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Standnav = () => {
  const router = useRouter()

  return (
    <ul className="flex flex-row items-center justify-center">
      <li className={router.pathname == '/' ? 'active' : ''}>
        <Link href="/">
          <a>Accueil</a>
        </Link>
      </li>
      <li className={router.pathname == '/about' ? 'active' : ''}>
        <Link href="/about">
          <a>Qui sommes-nous</a>
        </Link>
      </li>
      <li className={router.pathname == '/offre' ? 'active' : ''}>
        <Link href="/offre">
          <a>Notre offre</a>
        </Link>
      </li>
      <li className={router.pathname == '/preinscription' ? 'active' : ''}>
        <Link href="/preinscription">
          <a>Mon dossier</a>
        </Link>
      </li>
      <li>
        <a>{`Ville d'agadir`}</a>
      </li>
      <li>
        <Link href="/contact">
          <a href="#">Contact</a>
        </Link>
      </li>
    </ul>
  )
}

export default Standnav
