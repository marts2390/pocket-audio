import { IAppBlocState } from './state-model'
import { IAppBloc } from 'actions/interface'
import { ProtoBloc } from '../proto-bloc'

const defaultState: IAppBlocState = {
  modalOpen: false,
  imgSrc: ''
}
  
class AppBloc extends ProtoBloc<IAppBlocState> implements IAppBloc {
  constructor() {
    super(defaultState)
  }
  
  handleModal = (open: boolean, imgSrc: string) => {
    this.pushState({
      modalOpen: open,
      imgSrc: imgSrc
    })
  }
}

export default new AppBloc()