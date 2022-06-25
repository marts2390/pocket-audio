import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../view/components/Layout'
import PricesPage from '../view/page-content/Prices'
import Seo from '../view/components/Seo'

const PriceListPageComponent: FC = (dataProps: any) => {
  const { data } = dataProps
  const { title, metaDesc } = data.wpPage.seo

  return (
    <Layout>
      <Seo
        title={ title }
        description={ metaDesc }
      />
      <PricesPage data={ dataProps } />
    </Layout>
  )
}
export default PriceListPageComponent

export const query = graphql`
  {
    wpPage(slug: {eq: "prices"}) {
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
