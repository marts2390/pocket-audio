import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import styles from './styles.module.scss'

interface IButtonComponentProps {
  buttonDisabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "outlined" | "contained" | "text" | undefined; 
}

const ButtonComponent:FC<IButtonComponentProps> = ({
  buttonDisabled,
  children,
  className,
  type,
  variant = 'contained'
}) => {
  return (
    <Button 
      className={ className }
      disabled={ buttonDisabled }
      variant={ variant }
      size="large"
      type={ type }
      classes={ {
        root: styles.buttonRoot,
        contained: styles.contained,
        outlined: styles.outlined,
        containedPrimary: styles.containedPrimary,
        containedSecondary: styles.containedSecondary,
        outlinedPrimary: styles.outlinedPrimary,
        outlinedSecondary: styles.outlinedSecondary,
        label: styles.buttonText,
      } }
    >
      {children}
    </Button>
  )
}

export default ButtonComponent