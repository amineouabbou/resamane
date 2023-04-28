import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Presentation from '../components/about/Presentation'
import Ourvalues from '../components/about/Ourvalues'
import Ourlocation from '../components/about/Ourlocation'
import Layout from '../components/Ui/Layout'
import { GET_ABOUT_PAGE } from '../api/Queries'
import { getCmsData } from '../api'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const About = ({ data, current_lang }) => {
  const { title, metaDesc } = data.page.translation.seo

  const sections = data.page.translation.AcfHome.sectionsFlex

  return (
    <>
      <SEO title={title} description={metaDesc} />
      <Subheader title={data.page.translation.AcfHome.pageTitle} />

      {sections.map((item, index) => {
        if (item.__typename === 'Page_Acfhome_SectionsFlex_AboutIntroduction') {
          return <Presentation key={index} {...item} />
        }

        if (item.__typename === 'Page_Acfhome_SectionsFlex_NosValeurs') {
          return <Ourvalues key={index} {...item} />
        }

        if (item.__typename === 'Page_Acfhome_SectionsFlex_NotreEmplacement') {
          return <Ourlocation key={index} {...item} />
        }
      })}
    </>
  )
}

export default About

About.getLayout = function getLayout(page) {
  const { props } = page
  return <Layout lang={props.current_lang}>{page}</Layout>
}

export const getServerSideProps = async ({ locale }) => {
  const data = await getCmsData(GET_ABOUT_PAGE, 'qui-sommes-nous', locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
      current_lang: locale,
    },
  }
}
