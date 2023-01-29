import axios from 'axios'
import client from '../apollo-client'
import config from '../data/config'

const { GRAPHQL_URL } = config

export const getCmsData = async (query, slug, locale) => {
  let lang = ''
  if (locale == 'fr') {
    lang = 'FR'
  } else if (locale == 'ar') {
    lang = 'AR'
  } else {
    lang = 'EN'
  }

  const { data } = await client.query({
    query,
    variables: { slug: slug, lang },
  })

  return data
}
