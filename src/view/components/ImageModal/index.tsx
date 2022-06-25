import React, { FC } from 'react'
import { Modal, Backdrop } from '@material-ui/core'
import actions from '../../../actions'
import { useObservable } from 'rxjs-hooks'
import CloseIcon from '@material-ui/icons/Close'

import styles from './styles.module.scss'

const ImageModalComponent:FC = () => {
  const { imgSrc, modalOpen } = useObservable(actions.AppService.getSubject)
  || actions.AppService.getCurrentState()
  
  const handleClose = () => {
    actions.AppService.handleModal(false, '')
  }

  return (
    <Modal
      open={ modalOpen }
      onClose={ handleClose }
      className={ styles.modal }
      BackdropComponent={ Backdrop }
    >
      <div className={ styles.modalContent }>
        <CloseIcon
          className={ styles.closeIcon }
          onClick={ handleClose }
        />
        <img src={ imgSrc } />
      </div>
    </Modal>
  )
}

export default ImageModalComponent
