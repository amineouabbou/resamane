import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Presentation from '../components/preinscription/Presentation'
import Contact from '../components/preinscription/Contact'
import Layout from '../components/Ui/Layout'

const Mondossier = () => {
  return (
    <>
      <SEO
        title="Location logement agadir"
        description="Dossier de réservation de logement aux résidences universitaires Amane de Agadir"
      />
      <Subheader title="" subtitle="" type="full" />

      <Presentation />

      <Contact />
    </>
  )
}

export default Mondossier
