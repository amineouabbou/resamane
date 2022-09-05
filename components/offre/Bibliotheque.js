import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  titesStagger,
  imgScaling,
  shortFadeUp,
  fadeIn,
  fadeUpOverlayBox,
} from '../../data/useVariants'
import Bibliocard from './Bibliocard'

const DATA = [
  {
    cover: '/remove/vue-1.jpg',
    icon: '/icons/folders.svg',
    title: 'BIBLIOTHÈQUE',
    desc: `Notre résidence est située sur le Boulevard 11 Janvier, près
    de l’École Nationale d’Architecture, la Faculté des Sciences
    Juridiques Économiques et Sociales et en face de McDonald’s
    Adrar. Cet emplacement lui confrère de nombreux avantages, à
    savoir un environnement estudiantin spécial, propice à la
    concentration sur les objectifs liés à la réussite et à
    l’excellence, en plus d’un accès pratique et rapide à la route
    nationale N 1.`,
  },

  {
    cover: '/remove/vue-1.jpg',
    icon: '/icons/tv.svg',
    title: 'SALLE MULTIMÉDIA',
    desc: `Une salle multimédia tout à fait à adaptée à l’ère du tout numérique dans laquelle nous évoluons afin de vous permettre d’être à la page des nouvelles technologies de l’information et de la communication et de favoriser votre réussite`,
  },

  {
    cover: '/remove/vue-1.jpg',
    icon: '/icons/restaurant.svg',
    title: 'RESTAURANT',
    desc: `Un grand restaurant de 624m² constitué de deux étages où les résidentes et les externes peuvent y déguster de délicieux et savoureux plats préparés par un personnel hautement qualifiée. Derrière les fourneaux, une équipe qui se serrent les coudes et exerçant son métier avec passion et amour afin de satisfaire les bouches gourmandes, il s’agit d’un staff composé d’un chef de cuisine, d’un sous-chef, d’un chef de parti, d’un commis et de plusieurs pâtissiers, et plongeurs qui vous proposent une carte aussi riche que variés et des saveurs bien de chez nous mais aussi d’ailleurs, d’Italie, d’Espagne, d’Orient et d’Amérique`,
  },
]

const Bibliotheque = () => {
  return (
    <section className="facilities-sections pt-[20px] md:pt-[100px] md:pb-0">
      <div className="container mx-auto">
        <div className="inner py-[70px] relative pl-[20px] md:pl-[40px]">
          {DATA.map((item) => (
            <Bibliocard key={item.title} item={item} />
          ))}

          <div className="box">
            <div className="flex items-center md:mb-[65px] title relative before:bg-[#09556F] before:-left-[26px] md:before:-left-[46px]">
              <a href="#" className="btn outborder ml-[35px]">
                VOIR PLUS DE SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bibliotheque
