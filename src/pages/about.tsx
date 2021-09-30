import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../view/components/Layout'
import AboutPage from '../view/page-content/About'

const AboutPageComponent: FC = (data: any) => (
  <Layout>
    <AboutPage data={ data } />
  </Layout>
)

export default AboutPageComponent

export const query = graphql`
  {
    wpPage(slug: {eq: "about"}) {
      uri
      title
      content
      allPages {
        pageBanner {
          title
          sourceUrl
        }
      }
      aboutPageFields {
        blockOneText
        blockTwoText
        blockTwoImage {
          altText
          title
          sourceUrl
        }
        blockOneImage {
          sourceUrl
          title
          altText
        }
      }
    }
  }
`
