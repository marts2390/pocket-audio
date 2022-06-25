import AppBloc from './blocs/AppBloc'
import { IActions } from './interface'

class Actions implements IActions {
  AppService = AppBloc
}

export default new Actions()
