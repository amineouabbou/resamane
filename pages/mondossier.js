import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Header from '../components/Ui/Header'
import Layout from '../components/Ui/Layout'
import Footer from '../components/Ui/Footer'
import Presentation from '../components/preinscription/Presentation'
import Contact from '../components/preinscription/Contact'

const Mondossier = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Location logement agadir"
          description="Dossier de réservation de logement aux résidences universitaires Amane de Agadir"
        />
        <Header />
        <Subheader title="" subtitle="" type="full" />

        <Presentation />

        <Contact />

        <Footer />
      </Layout>
    </>
  )
}

export default Mondossier
