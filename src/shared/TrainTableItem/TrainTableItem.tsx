import cn from "classnames";

import styles from './TrainTableItem.module.css';
import ITrainTableItemProps from "./types";



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