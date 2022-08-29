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

export default function Home({ data }) {
  return (
    <Layout>
      <SEO />
      <Banner />
      <Navmain />
      <Aboutsection />
      <Atouts />
      <Panoramic />
      <CtaInscription />
      <Contact />
      <Footer />

      {/*
      {data.Page_Acfhome_SectionsFlex_NosServices ? <Ourservices {...data.Page_Acfhome_SectionsFlex_NosServices} /> : "" }

      <h2 className='text-5xl font-proxima-nova font-bold uppercase text-[32px] leading-[40px]'>VOUS L’AVEZ IMAGINÉ… <br />NOUS L’AVONS CONSTRUIT.</h2>
      
      {data.Page_Acfhome_SectionsFlex_Presentation ? <Aboutsection {...data.Page_Acfhome_SectionsFlex_Presentation} /> : ""}
      <Noschambres /> 

      <Panoramic />

      <Mediatheque />

       */}
    </Layout>
  )
}

/**
export const getServerSideProps = async () => {
  const data = await FethCmsPage('5')

  return {
    props: {
      data,
    },
  }
}
 */
