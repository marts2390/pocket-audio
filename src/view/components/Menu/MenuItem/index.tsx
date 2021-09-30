import React, { FC } from "react"
import { Link } from "gatsby"
import styles from './styles.module.scss'

interface IMenuItemProps {
  menuItem: any;
}

const MenuItem:FC<IMenuItemProps> = ({ menuItem }) => {
  return (
    <Link
      to={ menuItem.url }
      className={ styles.menuItem }
    >
      {menuItem.label}
    </Link>
  )
}

export default MenuItem