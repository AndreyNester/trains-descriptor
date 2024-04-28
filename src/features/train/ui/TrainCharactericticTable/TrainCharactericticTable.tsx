import cn from 'classnames';
import styles from './TrainCharactericticTable.module.css';
import { ITrainCharactericticTable } from './types';
import TrainCharactericticTableItem from '../../../../shared/TrainCharactericticTableItem/TrainCharactericticTableItem';

const TrainCharactericticTable = ({className, isLoading, trainCharacteristic, ...rest}: ITrainCharactericticTable) : JSX.Element=> {
  
  const classes = cn({
    [styles.table] : true,
    className
  })
  
  return (
    isLoading ? <div>loading...</div> :
    <table className={classes} {...rest}>
      
      <caption className={styles.caption}>Поезда</caption>

      <thead className={styles.thead}>
        <tr>
          <th>Ток двигателя</th>
          <th>Сила тяги</th>
          <th>Скорость</th>
        </tr>
      </thead>

      <tbody>
        {trainCharacteristic.map((item, index)=><TrainCharactericticTableItem data={item} key={index}/>)}
      </tbody>

    </table>
  )
}
export default TrainCharactericticTable;