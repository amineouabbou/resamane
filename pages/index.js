import React, { useEffect } from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Ui/Layout'
import Navmain from '../components/Navmain'
import Banner from '../components/home/Banner'
import Aboutsection from '../components/home/Aboutsection'
import Panoramic from '../components/home/Panoramic'
import Footer from '../components/Ui/Footer'
import { FethCmsPage } from '../api'

import Atouts from '../components/home/Atouts'
import Contact from '../components/home/Contact'
import CtaInscription from '../components/home/CtaInscription'
import Mobileheader from '../components/html/Mobileheader'

export default function Home({ data }) {
  console.log('Data ------: ', data)
  return (
    <Layout>
      <SEO />
      <Mobileheader />
      {data.Page_Acfhome_SectionsFlex_Slideshow && (
        <Banner {...data.Page_Acfhome_SectionsFlex_Slideshow} />
      )}
      <Navmain />

      {data.Page_Acfhome_SectionsFlex_Presentation && (
        <Aboutsection {...data.Page_Acfhome_SectionsFlex_Presentation} />
      )}

      {data.Page_Acfhome_SectionsFlex_NosAtouts && (
        <Atouts {...data.Page_Acfhome_SectionsFlex_NosAtouts} />
      )}

      {data.Page_Acfhome_SectionsFlex_Visite360 && (
        <Panoramic {...data.Page_Acfhome_SectionsFlex_Visite360} />
      )}

      <CtaInscription />

      {data.Page_Acfhome_SectionsFlex_ContactezNous && (
        <Contact {...data.Page_Acfhome_SectionsFlex_ContactezNous} />
      )}

      <Footer />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const data = await FethCmsPage('5')

  return {
    props: {
      data,
    },
  }
}
