import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../view/components/Layout'
import AboutPage from '../view/page-content/About'
import Seo from '../view/components/Seo'

const AboutPageComponent: FC = (dataProps: any) => {
  const { data } = dataProps
  const { title, metaDesc } = data.wpPage.seo

  return (
    <Layout>
      <Seo
        title={ title }
        description={ metaDesc }
      />
      <AboutPage data={ dataProps } />
    </Layout>
  )
}
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
        fredBio
        alexBio
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
        fredImage {
          altText
          title
          sourceUrl
        }
        alexImage {
          sourceUrl
          title
          altText
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
  }
`
