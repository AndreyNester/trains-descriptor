import cn from 'classnames';
import styles from './TrainCharactericticTableItem.module.css';
import ITrainCharacteristicProps from './types';

const TrainCharactericticTableItem = ({className, data, ...rest} : ITrainCharacteristicProps): JSX.Element => {
  const classes = cn({
    [styles.trow] : true,
    className
  })

  return (
    <tr className={classes} {...rest}>
      <td>{data.engineAmperage}</td>
      <td>{data.force}</td>
      <td>{data.speed}</td>
    </tr>
  )
}
export default TrainCharactericticTableItem;