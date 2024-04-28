import { DetailedHTMLProps, TableHTMLAttributes } from "react";
import { IData } from "../../../../entities/train/types";

export interface ITrainsTableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  isLoading : boolean,
  trains : IData[]
}