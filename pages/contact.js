import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Form from '../components/contact/Form'

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Informations des residences universtaires amane de Agadir"
        description="toutes les coordonnées des résidences univeristaires amane, résidences pour etudiantes à agadir"
      />
      <Subheader title="" subtitle="" type="full" />
      <Form />
    </>
  )
}

export default ContactPage
