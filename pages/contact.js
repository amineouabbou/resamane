import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Form from '../components/contact/Form'
import Layout from '../components/Ui/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GET_CONTACT_PAGE } from '../api/Queries'
import { getCmsData } from '../api'

const ContactPage = ({ data }) => {
  const { title, metaDesc } = data?.page?.translation?.seo || {}

  return (
    <>
      <SEO title={title} description={metaDesc} />
      <Subheader title="" subtitle="" type="full" />
      <Form />
    </>
  )
}

ContactPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default ContactPage

export const getServerSideProps = async ({ locale }) => {
  const data = await getCmsData(GET_CONTACT_PAGE, 'contact', locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
    },
  }
}
