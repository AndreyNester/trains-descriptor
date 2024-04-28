import { IData } from "../../entities/train/types";


export interface IInitialState {
  trains : IData[],
  isLoading : boolean,
  openedDescriptionId: number | null
}