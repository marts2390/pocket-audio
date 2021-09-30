import React, { FC } from 'react'
import styles from './styles.module.scss'

interface IFooterComponentProps {
  logo: {
    id: string;
    mediaItemUrl: string;
    altText: string;
  }
  menuItems: {
    id: string;
    label: string;
    url: string;
    title: string;
    target: string;
  }[]
}

const FooterComponent: FC<IFooterComponentProps> = ({
  logo,
  menuItems,
}) => {
  return (
    <div className={ styles.footer }>
      {logo && (
        <img src={ logo.mediaItemUrl } />
      )}
      <div className={ styles.footerMenu }>
        {menuItems.map((item) => (
          <a
            key={ item.id }
            href={ item.url }
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default FooterComponent