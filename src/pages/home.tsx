import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../view/components/Layout'
import HomePage from '../view/page-content/Home'
import Seo from '../view/components/Seo'

const HomePageComponent:FC = (dataProps: any) => {
  const { data } = dataProps
  const { title, metaDesc } = data.wpPage.seo

  return (
    <Layout>
      <Seo
        title={ title }
        description={ metaDesc }
      />
      <HomePage data={ dataProps }/>
    </Layout>
  )
}

export default HomePageComponent

export const query = graphql`
  {
    wpMediaItem(title: {eq: "logo-text"}) {
      id
      mediaItemUrl
      altText
    }
    
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

      seo {
        title
        metaDesc
        metaKeywords
        focuskw
        opengraphTitle
        opengraphDescription
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
