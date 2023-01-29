import React from 'react'
import { getCmsData } from '../../api'
import { GET_CMS_PAGE } from '../../api/Queries'

export default function CmsPage() {
  return <div>CmsPage</div>
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const data = await getCmsData(GET_CMS_PAGE, slug, context.locale)

  return {
    props: {
      data: '',
    },
  }
}
