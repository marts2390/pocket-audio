import React, { FC } from "react"
import { Link } from "gatsby"
import styles from './styles.module.scss'

interface ILogoComponent {
 logoUrl: string;
}

const LogoComponent:FC<ILogoComponent> = ({ logoUrl }) => {
  return (
    <Link to="/home">
      <img
        className={ styles.logo }
        src={ logoUrl }
      />
    </Link>
  )
}

export default LogoComponent