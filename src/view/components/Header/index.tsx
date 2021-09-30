import React, { FC } from "react"
import Menu from '../Menu'
import Logo from '../Logo'
import styles from './styles.module.scss'

interface IHeaderProps {
  headerData: any;
}

const HeaderComponent:FC<IHeaderProps> = ({
  headerData
}) => (
  <div className={ styles.header }>
    <div className={ styles.container }>
      <div className={ styles.logo }>
        {headerData.wpMediaItem && (
          <Logo logoData={ headerData.wpMediaItem }/>
        )}
      </div>
      <Menu menuData={ headerData.wpMenu.menuItems.nodes }/>
    </div>
  </div>
)

export default HeaderComponent