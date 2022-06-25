import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../view/components/Layout'
import ContactPage from '../view/page-content/Contact'
import Seo from '../view/components/Seo'

const ContactPageComponent: FC = (dataProps: any) => {
  const { data } = dataProps
  const { title, metaDesc } = data.wpPage.seo
  return (
    <Layout>
      <Seo
        title={ title }
        description={ metaDesc }
      />
      <ContactPage data={ dataProps } />
    </Layout>
  )
}

export default ContactPageComponent

export const query = graphql`
  {
    wpPage(slug: {eq: "contact"}) {
      uri
      title
      content
      contactFields {
        successText
      }
      seo {
        title
        metaDesc
        metaKeywords
        focuskw
        opengraphTitle
        opengraphDescription
      }
      allPages {
        pageBanner {
          title
          sourceUrl
        }
      }
    }
  }
`
