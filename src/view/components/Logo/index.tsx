import React, { FC } from "react"
import styles from './styles.module.scss'

interface ILogoComponent {
  logoData: {
    altText: string;
    id: string;
    mediaItemUrl: string;
  }
}

const LogoComponent:FC<ILogoComponent> = ({ logoData }) => {
  const { mediaItemUrl } = logoData
  return (
    <img
      className={ styles.logo }
      src={ mediaItemUrl }
    />
  )
}

export default LogoComponent