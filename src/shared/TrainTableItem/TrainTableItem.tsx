import cn from "classnames";
import { DetailedHTMLProps } from "react";
import styles from './TrainTableItem.module.css';

interface ITrainTableItemProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  traintName : string,
  trainDescription : string
}

const TrainTableItem = ({className, traintName, trainDescription,...rest} : ITrainTableItemProps) : JSX.Element=> {
  const classes = cn({
    [styles.trow] : true,
    className
  })
  return (
    <tr className={classes} {...rest}>
      <td>{traintName}</td>
      <td>{trainDescription}</td>
    </tr>
  )
}
export default TrainTableItem;