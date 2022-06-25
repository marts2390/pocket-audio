export interface IActions {
  AppService: IAppBloc
}

export interface IAppBloc {
  handleModal: (open: boolean, imgSrc: string) => void
}