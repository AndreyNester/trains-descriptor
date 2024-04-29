import cn from 'classnames';
import styles from './TrainCharactericticTable.module.css';
import { ITrainCharactericticTable } from './types';

const TrainCharactericticTable = ({className, isLoading, train, ...rest}: ITrainCharactericticTable) : JSX.Element=> {

  
  const classes = cn(className, {
    [styles.table] : true
  })
  
  return (
    isLoading ? <div>loading...</div> :
    <table className={classes} {...rest}>
      
      <caption className={styles.caption}>Характеристики <br />{train.name}</caption>

      <thead className={styles.thead}>
        <tr>
          <th>Ток двигателя</th>
          <th>Сила тяги</th>
          <th>Скорость</th>
        </tr>
      </thead>

      <tbody>
        {train.characteristics.map((item, index)=>(
              <tr className={styles.trow} key={index}>
                <td>{item.engineAmperage}</td>
                <td>{item.force}</td>
                <td>{item.speed}</td>
            </tr>
        ))}
      </tbody>

    </table>
  )
}
export default TrainCharactericticTable;