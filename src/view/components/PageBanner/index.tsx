import React, { FC } from "react"
import styles from './styles.module.scss'

interface IPageBannerProps {
    bannerImage: string;
    title: string;
}

const PageBannerComponent: FC<IPageBannerProps> = ({
  bannerImage,
  title,
}) => (
  <div
    className={ styles.banner }
    style={ { backgroundImage: `url(${bannerImage})` } }
  >
    <div className={ styles.bannerOverlay } >
      <div className={ styles.bannerContent }>
        <div className={ styles.bannerInner }>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  </div>
)

export default PageBannerComponent