import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../view/components/Layout'
import HomePage from '../view/page-content/Home'

const IndexPageComponent:FC = (data: any) => (
  <Layout>
    <HomePage data={ data }/>
  </Layout>
)

export default IndexPageComponent

export const query = graphql`
  {
    wpPage(slug: {eq: "home"}) {
      id
      allPages {
        pageBanner {
          title
          sourceUrl
        }
      }
      homePageFields {
        bannerSubtitle
        bannerTitle
        bioText
        profileText1
        profileText2
        bioImage {
          sourceUrl
          altText
        }
        profilePicOne {
          sourceUrl
          altText
        }
        profilePicTwo {
          sourceUrl
          altText
        }
      }
    }

    allWpProject {
      nodes {
        id
        uri
        title
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        projectsFields {
          link {
            url
          }
        }
      }
    }

    allWpService {
      nodes {
        id
        excerpt
      }
    }

    allWpSocialLink {
      nodes {
        customSocialLinks {
          facebook
          instagram
          soundcloud
          twitter
          youtube
        }
      }
    }
  }
`
