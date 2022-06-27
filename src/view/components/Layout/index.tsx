/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './styles.module.scss'
import '../../styles/base.scss'
import '../../styles/reset.scss'
import '../../styles/styles.scss'
 
const Layout: FC = ({ children }) => {
  return (
    <div className={ styles.layout }>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
 
export default Layout
 