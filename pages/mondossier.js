import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Presentation from '../components/preinscription/Presentation'
import Contact from '../components/preinscription/Contact'
import Layout from '../components/Ui/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GET_DOSSIER_PAGE } from '../api/Queries'
import { getCmsData } from '../api'

const Mondossier = ({ data }) => {
  const { title, metaDesc } = data?.page?.translation?.seo || {}
  const { titre, description, stepsList } =
    data?.page?.translation?.AcfDossier || {}
  return (
    <>
      <SEO title={title} description={metaDesc} />
      <Subheader title="" subtitle="" type="full" />

      <Presentation
        titre={titre}
        description={description}
        stepsList={stepsList}
      />

      <Contact />
    </>
  )
}

Mondossier.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Mondossier

export const getServerSideProps = async ({ locale }) => {
  const data = await getCmsData(GET_DOSSIER_PAGE, 'mon-dossier', locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
    },
  }
}
