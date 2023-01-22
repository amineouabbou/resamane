import SEO from '../components/SEO'
import Banner from '../components/home/Banner'
import Aboutsection from '../components/home/Aboutsection'
import Panoramic from '../components/home/Panoramic'
import { getCmsData } from '../api'

import Atouts from '../components/home/Atouts'
import Contact from '../components/home/Contact'
import HomeLayout from '../components/Ui/Layout/HomeLayout'
import { GET_CMS_PAGE } from '../api/Queries'

export default function Home({ data }) {
  console.log('DATA', data)
  const { title, metaDesc } = data.page.translation.seo
  const sections = data.page.translation.AcfHome.sectionsFlex
  console.log('Section', sections)
  return (
    <>
      <SEO title={title} description={metaDesc} />

      {sections.map((item, index) => {
        if (item.__typename === 'Page_Acfhome_SectionsFlex_Slideshow') {
          return <Banner key={index} {...item} />
        }

        if (item.__typename === 'Page_Acfhome_SectionsFlex_Presentation') {
          return <Aboutsection key={index} {...item} />
        }

        if (item.__typename === 'Page_Acfhome_SectionsFlex_NosAtouts') {
          return <Atouts key={index} {...item} />
        }

        if (item.__typename === 'Page_Acfhome_SectionsFlex_Visite360') {
          return <Panoramic key={index} {...item} />
        }

        if (item.__typename === 'Page_Acfhome_SectionsFlex_ContactezNous') {
          return <Contact key={index} {...item} />
        }
      })}
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}

export const getServerSideProps = async ({ locale }) => {
  const data = await getCmsData(GET_CMS_PAGE, 'acceuil', locale)

  return {
    props: {
      data,
    },
  }
}
