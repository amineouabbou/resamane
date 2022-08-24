import axios from 'axios'
import config from '../data/config'

const { GRAPHQL_URL } = config

export const FethCmsPage = async (pageid) => {
  const res = await axios({
    url: GRAPHQL_URL,
    method: 'post',
    data: {
      query: `
                    query pageQuery {
                        page(id: ${pageid}, idType: DATABASE_ID) {
                title
                AcfHome {
                sectionsFlex {
                    __typename
                    ... on Page_Acfhome_SectionsFlex_Slideshow {
                    slides {
                        titre
                        sousTitre
                        photo {
                        id
                        sourceUrl
                        }
                    }
                    }
                    ... on Page_Acfhome_SectionsFlex_Presentation {
                    title
                    intro: introduction
                    contentColumns {
                        content
                    }
                    }
                    ... on Page_Acfhome_SectionsFlex_NosServices {
                    introductionGroup {
                        titre
                        texte
                    }
                    tabs {
                        paginationGroup {
                        icone {
                            sourceUrl
                            mediaDetails{
                            height
                            width
                            }
                        }
                        titreTab
                        }
                        texteGroup {
                        photo {
                            databaseId
                            sourceUrl
                        }
                        titre
                        texte
                        }
                    }
                    }
                }
                }
            }
                    }
                `,
    },
  })

  const arr = res.data.data.page.AcfHome.sectionsFlex
  const data = arr.reduce(
    (acc, curr) => ((acc[curr.__typename] = { ...curr }), acc),
    {}
  )

  return data
}
