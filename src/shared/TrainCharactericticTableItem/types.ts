import { DetailedHTMLProps } from "react";
import { ITrainCharacteristic } from "../../entities/train/types";

interface ITrainCharacteristicProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  data : ITrainCharacteristic
}
export default ITrainCharacteristicProps;