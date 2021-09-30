/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC, ReactNode } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './styles.module.scss'
import '../../styles/base.scss'
import '../../styles/reset.scss'
import '../../styles/styles.scss'
 
 interface ILayoutProps {
   children: ReactNode;
 }
 
const Layout: FC<ILayoutProps> = ({ children }) => {
  const headerData = useStaticQuery(graphql`
  {
    wpMenu {
      menuItems {
        nodes {
          id
          label
          url
          title
          target
        }
      }
    }
    wpMediaItem(title: {eq: "logo-4"}) {
      id
      mediaItemUrl
      altText
    }
  }`)
 
  return (
    <div className={ styles.layout }>
      <Header headerData={ headerData }/>
      <main>
        {children}
      </main>
      <Footer
        logo={ headerData.wpMediaItem }
        menuItems={ headerData.wpMenu.menuItems.nodes }
      />
    </div>
  )
}
 
export default Layout
 