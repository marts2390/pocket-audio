/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './styles.module.scss'
import '../../styles/base.scss'
import '../../styles/reset.scss'
import '../../styles/styles.scss'
 
const Layout: FC = ({ children }) => {
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
  }
  `)

  return (
    <div className={ styles.layout }>
      <Header />
      <main>
        {children}
      </main>
      <Footer menuItems={ headerData.wpMenu.menuItems.nodes } />
    </div>
  )
}
 
export default Layout
 