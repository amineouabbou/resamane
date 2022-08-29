import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Header from '../components/Ui/Header'
import Layout from '../components/Ui/Layout'
import Noschambres from '../components/home/Noschambres'
import Footer from '../components/Ui/Footer'
import Bibliotheque from '../components/offre/Bibliotheque'

const Offre = ({ slug }) => {
  return (
    <>
      <Layout>
        <SEO />
        <Header />
        <Subheader
          title="NOTRE OFFRE"
          description="Notre résidence est dotée d’installations modernes et ultra sophistiquées qui vous offre un confort absolu, une solution de logement tout inclus, abordables par-dessus tout car présentant un excellent rapport qualité prix."
        />

        <Noschambres />

        <Bibliotheque />

        <Footer />
      </Layout>
    </>
  )
}

export default Offre
