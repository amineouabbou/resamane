import React from 'react'
import { getCmsData } from '../../api'
import { GET_CMS_PAGE } from '../../api/Queries'

export default function CmsPage() {
  return <div>CmsPage</div>
}

export const getServerSideProps = async (context) => {
  console.log('Local----', context.locale)
  const { slug } = context.query
  console.log('Slug', slug)
  const data = await getCmsData(GET_CMS_PAGE, slug, context.locale)

  console.log('--------DAT', data)

  return {
    props: {
      data: '',
    },
  }
}
