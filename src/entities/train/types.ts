export type IGetTrainsResponse = ITrain[]

export interface ITrain {
  name: string
  description: string
  characteristics: TrainCharacteristic[]
}

export interface TrainCharacteristic {
  speed: number
  force: number
  engineAmperage: number
}