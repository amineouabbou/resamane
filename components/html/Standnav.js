import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { titesStagger, shortFadeUp } from '../../data/useVariants'
import { useQuery } from '@apollo/client'
import { GET_MENU } from '../../api/Queries'
import slugify from 'slugify'

const Standnav = () => {
  const router = useRouter()
  const { slug } = router.query
  const { locale } = router
  const current_lang = locale.toUpperCase()

  const { loading, data } = useQuery(GET_MENU, {
    variables: { lang: current_lang },
  })

  if (loading) {
    return <div>Loading ...</div>
  }

  if (data) {
    return (
      <motion.ul
        variants={titesStagger(0.6, 0.1)}
        initial="initial"
        animate="animate"
        exit="exit"
        className="md:flex flex-row items-center justify-center"
      >
        {data.menuItems.nodes.map((item) => (
          <motion.li
            className={`${router.pathname === item.path ? 'active' : ''}`}
            key={item.id}
          >
            <Link href={`${item.path}`}>{item.label}</Link>
          </motion.li>
        ))}
      </motion.ul>
    )
  }
}

export default Standnav
