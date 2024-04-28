import cn from "classnames";
import { DetailedHTMLProps, TableHTMLAttributes } from "react";
import styles from './TrainsTable.module.css';
import TrainTableItem from "../TrainTableItem/TrainTableItem";

interface ITrainsTableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {}

const TrainsTable = ({className, ...rest} : ITrainsTableProps): JSX.Element => {
  const classes = cn({
    className,
    [styles.table]: true,
  });
  return (
  <table className={classes} {...rest}>
    <caption>poezda</caption>

    <thead className={styles.thead}>
      <tr>
        <th>Название</th>
        <th>Опсание</th>
      </tr>
    </thead>

    <tbody>
      <TrainTableItem traintName="trainname1" trainDescription="traindescr1" />
      <TrainTableItem traintName="trainname2" trainDescription="traindescr2" />
      <TrainTableItem traintName="trainname3" trainDescription="traindescr3" />
      <TrainTableItem traintName="trainname4" trainDescription="traindescr4" />
    </tbody>
  </table>
)
}
export default TrainsTable;