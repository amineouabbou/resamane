import Link from 'next/link'
import React from 'react'

const Standnav = () => {
  return (
    <ul className="flex flex-row items-center justify-center">
      <li>
        <Link href="/about">
          <a href="#">À Propos</a>
        </Link>
      </li>
      <li>
        <a href="#">Résidence Amane</a>
      </li>
      <li className="active">
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Mon dossier</a>
      </li>
      <li>
        <a href="#">Ville d’agadir</a>
      </li>
      <li>
        <a href="#">Vidéo 360</a>
      </li>
      <li>
        <a href="#">Médiathèque</a>
      </li>
      <li>
        <Link href="/preinscription">
          <a href="#">Contact</a>
        </Link>
      </li>
    </ul>
  )
}

export default Standnav
