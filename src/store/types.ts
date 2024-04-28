import { IGetTrainsResponse } from "../entities/train/types";


export interface IInitialState {
  trains : IGetTrainsResponse,
  isLoading : boolean
}