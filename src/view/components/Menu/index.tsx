import React, { FC } from "react"
import { graphql } from "gatsby"
import MenuItem from "./MenuItem"
import styles from './styles.module.scss'

/** Define MenuItem fragment and get all primary menu items */
graphql`
{
  wpMenu(locations: {eq: PRIMARY}) {
    menuItems {
      nodes {
        label
        url
        target
        title
      }
    }
  }
}
`

interface IMenuProps {
  menuData: {
    id: string;
    label: string,
    url: string;
  }[]
}

const MenuComponent:FC<IMenuProps> = ({
  menuData,
}) => {
  return (
    <div
      className={ styles.menu }
    >
      {menuData && menuData.map((menuItem) => (
        <MenuItem
          key={ menuItem.id }
          menuItem={ menuItem }
        />
      ))}
    </div>
  )
}

export default MenuComponent