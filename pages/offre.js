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
        <SEO
          title="Résidences étudiantes à agadir"
          description="Résidences universitaires Amane est une résidences pour étudiantes, situées à agadir, avec une capacité de 880 lits, appartements et chambres"
        />
        <Header />
        <Subheader
          title="NOTRE OFFRE"
          description="Résidences Amane est un campus résidentiel multi-services de plus de 18 000 m² doté de différents espaces d’études, de loisirs et de bien-être, et avec une capacité de 880 lits répartis dans deux pavillons d’hébergement, composés de studios et appartements éclairés, équipés, et connectés 
          qui vous offrent un confort absolu dans un logement pratique et fonctionnel.
          Notre offre de logement vous donne accès à des services et commodités gratuits ou payants utiles pour vos besoins quotidiens. "
        />
        <div className="flex justify-center">
          <a
            href="https://api.residencesamane.ma/wp-content/uploads/2022/10/depliant-VF.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn lightblue mb-[40px] md:mb-[85px]"
          >
            Téléchargez notre plaquette
          </a>
        </div>

        <Noschambres />

        <Bibliotheque />

        <Footer />
      </Layout>
    </>
  )
}

export default Offre
