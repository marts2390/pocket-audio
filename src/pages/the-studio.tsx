import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../view/components/Layout'
import StudioPageContent from '../view/page-content/Studio'

const StudioPageComponent: FC = (data: any) => (
  <Layout>
    <StudioPageContent data={ data } />
  </Layout>
)

export default StudioPageComponent

export const query = graphql`
  {
    wpPage(slug: {eq: "the-studio"}) {
      uri
      title
      content
      allPages {
        pageBanner {
          title
          sourceUrl
        }
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
