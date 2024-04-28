import { DetailedHTMLProps, TableHTMLAttributes } from "react";
import { ITrainCharacteristic } from "../../../../entities/train/types";

export interface ITrainCharactericticTable extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  isLoading : boolean,
  trainCharacteristic : ITrainCharacteristic[]
}