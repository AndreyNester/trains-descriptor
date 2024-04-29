import cn from "classnames";
import styles from './TrainsTable.module.css';
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { ITrainsTableProps } from "./types";
import { openDescription } from "../../../../app/store/trainSlice";

const TrainsTable = ({className, isLoading, trains=[] , ...rest} : ITrainsTableProps): JSX.Element => {

  const dispatch = useAppDispatch();
  const activeId = useAppSelector((state)=>state.trains.openedDescriptionId)
  
  const classes = cn(className, {
    [styles.table]: true,
  });

  const getClassName = (id: number) : string => cn({
    [styles.trow]: true,
    [styles.active] : trains[id].id === activeId
  })

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
        {trains.map((item)=> 
          (
            <tr className={getClassName(item.id)} key={item.id} onClick={()=>onOpenDescription(item.id)}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
      </tbody>
    </table>
)
}
export default TrainsTable;