import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type MetaProperty = {
  property: string;
  content: string;
}

type MetaName = {
  name: string;
  content: string;
}

type Meta = MetaName | MetaProperty

export interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Meta[];
}

const SEOComponent: FC<SEOProps> = ({
  title,
  description,
  lang,
  meta,
}) => {
  const { site } = useStaticQuery(
    graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={ {
        lang: lang || 'en'
      } }
      title={ title }
      titleTemplate={ `%s | ${site.siteMetadata.title}` }
      meta={ [
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta || []) }
    />
  )
}

export default SEOComponent
