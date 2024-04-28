import cn from "classnames";
import styles from './TrainsTable.module.css';
import TrainTableItem from "../../../../shared/TrainTableItem/TrainTableItem";
import { useAppDispatch } from "../../../../app/store/hooks";
import { ITrainsTableProps } from "./types";
import { openDescription } from "../../../../app/store/trainSlice";

const TrainsTable = ({className, isLoading, trains=[] , ...rest} : ITrainsTableProps): JSX.Element => {

  const dispatch = useAppDispatch();
  
  const classes = cn(className, {
    [styles.table]: true,
  });

  const onOpenDescription = (id : number) : void => {
    dispatch(openDescription(id))
  }

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
        {trains.map((item)=><TrainTableItem key={item.id} traintName={item.name} trainDescription={item.description} onClick={()=>onOpenDescription(item.id)}/>)}
      </tbody>
    </table>
)
}
export default TrainsTable;