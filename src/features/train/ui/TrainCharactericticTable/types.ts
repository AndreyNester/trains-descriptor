import { DetailedHTMLProps, TableHTMLAttributes } from "react";
import { IData } from "../../../../entities/train/types";

export interface ITrainCharactericticTable extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  train : IData,
}