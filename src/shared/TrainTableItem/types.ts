import { DetailedHTMLProps } from "react";

interface ITrainTableItemProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  traintName : string,
  trainDescription : string
}
export default ITrainTableItemProps;