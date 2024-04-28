export interface IData extends ITrain {
  id : number
}
export type IGetTrainsResponse = ITrain[]

export interface ITrain {
  name: string
  description: string
  characteristics: ITrainCharacteristic[]
}

export interface ITrainCharacteristic {
  speed: number
  force: number
  engineAmperage: number
}