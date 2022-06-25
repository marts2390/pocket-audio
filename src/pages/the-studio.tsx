import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../view/components/Layout'
import StudioPageContent from '../view/page-content/Studio'
import Seo from '../view/components/Seo'

const StudioPageComponent: FC = (dataProps: any) => {
  const { data } = dataProps
  const { title, metaDesc } = data.wpPage.seo

  return (
    <Layout>
      <Seo
        title={ title }
        description={ metaDesc }
      />
      <StudioPageContent data={ dataProps } />
    </Layout>    
  )
}
export default StudioPageComponent

export const query = graphql`
  {
    wpPage(slug: {eq: "the-studio"}) {
      uri
      title
      content
      studioPageFields {
        listOneList
        listOneTitle
        listThreeList
        listThreeTitle
        listTwoList
        listTwoTitle
        listFourList
        listFourTitle
      }
      allPages {
        pageBanner {
          title
          sourceUrl
        }
      }
      seo {
        title
        metaDesc
        metaKeywords
        focuskw
        opengraphTitle
        opengraphDescription
      }
    }
    allWpMediaItem(filter: {altText: {eq: "studio-image"}}) {
      nodes {
        id
        sourceUrl
      }
    }
  }
`
