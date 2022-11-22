import React from 'react'

import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Header from '../components/Ui/Header'
import Layout from '../components/Ui/Layout'
import Footer from '../components/Ui/Footer'
import Presentation from '../components/about/Presentation'
import Ourvalues from '../components/about/Ourvalues'
import Ourlocation from '../components/about/Ourlocation'

const About = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Résidence et logement universitaire a agadir"
          description="Résidences universitaires Amane est une résidence et un campus multi-services inclusif et fonctionnel, pour étudiantes située à agadir "
        />
        <Header />
        <Subheader title="QUI SOMMES-NOUS ?" />
        <Presentation />
        <Ourvalues />
        <Ourlocation />
        <Footer />
      </Layout>
    </>
  )
}

export default About
