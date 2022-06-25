import React, { FC } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import MenuItem from "./MenuItem"
import styles from './styles.module.scss'

const MenuComponent:FC = () => {
  const getMenuItems = useStaticQuery(graphql`
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

  const { nodes } = getMenuItems.wpMenu.menuItems

  return (
    <div
      className={ styles.menu }
    >
      {nodes && nodes.map((menuItem) => (
        <MenuItem
          key={ menuItem.id }
          menuItem={ menuItem }
        />
      ))}
    </div>
  )
}

export default MenuComponent