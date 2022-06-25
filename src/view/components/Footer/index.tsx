import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Menu from '../Menu'
import Logo from '../Logo'
import styles from './styles.module.scss'
import SocialLinks from '../SocialLinks'

interface IFooterComponentProps {
  menuItems: {
    id: string;
    label: string;
    url: string;
    title: string;
    target: string;
  }[]
}

const FooterComponent: FC<IFooterComponentProps> = ({
  menuItems,
}) => {
  const footerData = useStaticQuery(graphql`
  {
    wpMediaItem(title: {eq: "logo-icon"}) {
      id
      mediaItemUrl
      altText
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
`)
  return (
    <div className={ styles.footer }>
      {footerData.wpMediaItem && (
        <Logo logoUrl={ footerData.wpMediaItem.mediaItemUrl } /> 
      )}
      <div className={ styles.footerMenu }>
        <Menu />
      </div>
      <div>
        <SocialLinks links={ footerData.allWpSocialLink.nodes[0].customSocialLinks } />
      </div>
    </div>
  )
}

export default FooterComponent