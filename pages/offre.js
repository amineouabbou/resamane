import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Noschambres from '../components/home/Noschambres'
import Bibliotheque from '../components/offre/Bibliotheque'
import Layout from '../components/Ui/Layout'
import { GET_ABOUT_PAGE, GET_OFFER_PAGE } from '../api/Queries'
import { getCmsData } from '../api'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Offre = ({ data }) => {
  const { title, metaDesc } = data.page.translation.seo

  const sections = data.page.translation.AcfHome.sectionsFlex

  return (
    <>
      <SEO title={title} description={metaDesc} />

      {sections.map((item, index) => {
        if (
          item.__typename === 'Page_Acfhome_SectionsFlex_OurOfferPresentation'
        ) {
          return (
            <div key={index}>
              <Subheader title={item?.title} description={item?.presentation} />
              <div className="flex justify-center">
                <a
                  href={item.button.file.mediaItemUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn lightblue mb-[40px] md:mb-[85px]"
                >
                  {item.button.label}
                </a>
              </div>
            </div>
          )
        }
        if (
          item.__typename === 'Page_Acfhome_SectionsFlex_ChambresEtAppartements'
        ) {
          return <Noschambres key={index} {...item} />
        }

        if (item.__typename === 'Page_Acfhome_SectionsFlex_OffreAdvantages') {
          return <Bibliotheque key={index} {...item} />
        }
      })}
    </>
  )
}

export default Offre

export const getServerSideProps = async ({ locale }) => {
  const data = await getCmsData(GET_OFFER_PAGE, 'notre-offre', locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
    },
  }
}
