import cn from "classnames";
import styles from './TrainsTable.module.css';
import TrainTableItem from "../../../../shared/TrainTableItem/TrainTableItem";
import { useAppSelector } from "../../../../app/store/hooks";
import { ITrainsTableProps } from "./types";

const TrainsTable = ({className, ...rest} : ITrainsTableProps): JSX.Element => {

  const {isLoading, trains} = useAppSelector((state)=>state.trains)
  
  const classes = cn({
    className,
    [styles.table]: true,
  });

  return (
    isLoading ? <div>loading...</div> : 
    <table className={classes} {...rest}>
      <caption className={styles.caption}>Поезда</caption>

      <thead className={styles.thead}>
        <tr>
          <th>Название</th>
          <th>Опсание</th>
        </tr>
      </thead>

      <tbody>
        {trains.map((item, index)=><TrainTableItem key={index} traintName={item.name} trainDescription={item.description} />)}
      </tbody>
    </table>
)
}
export default TrainsTable;