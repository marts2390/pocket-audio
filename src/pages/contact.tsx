import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../view/components/Layout'
import ContactPage from '../view/page-content/Contact'

const ContactPageComponent: FC = (data: any) => (
  <Layout>
    <ContactPage data={ data } />
  </Layout>
)

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
      allPages {
        pageBanner {
          title
          sourceUrl
        }
      }
    }
  }
`
