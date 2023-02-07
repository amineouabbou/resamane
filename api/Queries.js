import { gql } from '@apollo/client'

export const GET_CMS_PAGE = gql`
  query getHomePage($slug: ID!, $lang: LanguageCodeEnum!) {
    page(id: $slug, idType: URI) {
      title
      translation(language: $lang) {
        title
        seo {
          title
          metaDesc
        }
        AcfHome {
          sectionsFlex {
            __typename
            ... on Page_Acfhome_SectionsFlex_Slideshow {
              slides {
                sousTitre
                titre
                photo {
                  id
                  sourceUrl(size: _1536X1536)
                }
              }
            }
            ... on Page_Acfhome_SectionsFlex_Presentation {
              title
              intro: introduction
              photo {
                mediaItemUrl
              }
              phrase
              phrase2
            }
            ... on Page_Acfhome_SectionsFlex_NosAtouts {
              titre
              listeAtoutsRep {
                icone {
                  sourceUrl
                }
                titre
                description
                popup
              }
            }
            ... on Page_Acfhome_SectionsFlex_Visite360 {
              titre
              fieldGroupName
              arrierePlan {
                sourceUrl(size: _1536X1536)
              }
            }
            ... on Page_Acfhome_SectionsFlex_ContactezNous {
              titre
              listeContactRep {
                icone
                label
                valeur
              }
            }
            ... on Page_Acfhome_SectionsFlex_CallToAction {
              titre
              sousTitre
              bouttonGroup {
                label
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_ABOUT_PAGE = gql`
  query getAboutPage($slug: ID!, $lang: LanguageCodeEnum!) {
    page(id: $slug, idType: URI) {
      title
      translation(language: $lang) {
        title
        seo {
          title
          metaDesc
        }
        AcfHome {
          pageTitle
          sectionsFlex {
            __typename
            ... on Page_Acfhome_SectionsFlex_AboutIntroduction {
              presentationTexte
              backgroundImage {
                mediaItemUrl
              }
            }
            ... on Page_Acfhome_SectionsFlex_NosValeurs {
              sectionTitle
              listeValeurs {
                icone {
                  mediaItemUrl
                }
                titre
                popupContenu
              }
            }
            ... on Page_Acfhome_SectionsFlex_NotreEmplacement {
              sectionTitle
              presentationTexte
              mapImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`

export const GET_OFFER_PAGE = gql`
  query getOffrePage($slug: ID!, $lang: LanguageCodeEnum!) {
    page(id: $slug, idType: URI) {
      title
      translation(language: $lang) {
        title
        seo {
          title
          metaDesc
        }
        AcfHome {
          pageTitle
          sectionsFlex {
            __typename
            ... on Page_Acfhome_SectionsFlex_OurOfferPresentation {
              title
              presentation
              button {
                label
                file {
                  mediaItemUrl
                }
              }
            }
            ... on Page_Acfhome_SectionsFlex_ChambresEtAppartements {
              sectionTitle
              tabsRep {
                tabLabelGroup {
                  label
                  number
                }
                gallery {
                  mediaItemUrl
                }
              }
            }
            ... on Page_Acfhome_SectionsFlex_OffreAdvantages {
              listeAdvantages {
                icone {
                  mediaItemUrl
                }
                title
                shortDescription
              }
            }
          }
        }
      }
    }
  }
`

export const GET_DOSSIER_PAGE = gql`
  query getDossierPage($slug: ID!, $lang: LanguageCodeEnum!) {
    page(id: $slug, idType: URI) {
      translation(language: $lang) {
        title
        seo {
          title
          metaDesc
        }
        AcfDossier {
          titre
          description
          stepsList {
            title
            content
          }
        }
      }
    }
  }
`

export const GET_CONTACT_PAGE = gql`
  query getDossierPage($slug: ID!, $lang: LanguageCodeEnum!) {
    page(id: $slug, idType: URI) {
      translation(language: $lang) {
        title
        seo {
          title
          metaDesc
        }
      }
    }
  }
`

export const GET_MENU = gql`
  query getMenu($lang: LanguageCodeFilterEnum) {
    menuItems(where: { language: $lang, location: PRIMARY }) {
      nodes {
        id
        label
        path
      }
    }
  }
`

export const GET_FOOTER_MENUS = gql`
  query GET_FOOTER_MENUS($lang: LanguageCodeFilterEnum) {
    menuItems(where: { language: $lang, location: FOOTER }, first: 100) {
      nodes {
        label
        childItems {
          nodes {
            label
            url
          }
        }
      }
    }
  }
`
