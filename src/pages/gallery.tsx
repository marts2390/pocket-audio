import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../view/components/Layout'
import GalleryPageContent from '../view/page-content/Gallery'
import Seo from '../view/components/Seo'

const GalleryPageComponent: FC = (data: any) => (
  <Layout>
    <Seo title="Gallery"/>
    <GalleryPageContent data={ data } />
  </Layout>
)

export default GalleryPageComponent

export const query = graphql`
  {
    allWpMediaItem(filter: {altText: {eq: "gallery-img"}}) {
      nodes {
        id
        sourceUrl
      }
    }
  }
`
