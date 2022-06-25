import React, { FC } from "react"
import Menu from '../Menu'
import Logo from '../Logo'
import styles from './styles.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import cn from 'classnames'

const HeaderComponent:FC = () => {
  const { pathname } = useLocation()
  const headerClasses = cn(styles.header, {
    [styles.isHome]: pathname.includes('/home')
  })

  const logo =  useStaticQuery(graphql`
  {
    wpMediaItem(title: {eq: "logo-icon"}) {
      id
      mediaItemUrl
      altText
    }
  }
  `)

  return (
    <div className={ headerClasses }>
      <div className={ styles.headerContainer }>
        <div className={ styles.logo }>
          {logo.wpMediaItem && (
            <Logo logoUrl={ logo.wpMediaItem.mediaItemUrl }/>
          )}
        </div>
        <div className={ styles.menu }>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent