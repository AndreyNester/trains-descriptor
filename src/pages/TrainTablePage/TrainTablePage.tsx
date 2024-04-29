import styles from './TrainTablePage.module.css';
import cn from 'classnames';
import { ITrainTablePageProps } from './types';
import TableWrapper from '../../shared/TableWrapper/TableWrapper';
import TrainsTable from '../../features/train/ui/TrainsTable/TrainsTable';
import TrainCharactericticTable from '../../features/train/ui/TrainCharactericticTable/TrainCharactericticTable';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { useEffect } from 'react';
import { getTrains } from '../../app/store/trainSlice';

const TrainTablePage = ({className, ...rest} : ITrainTablePageProps): JSX.Element => {

  const {isLoading, trains, openedDescriptionId} = useAppSelector((state)=>state.trains)
  const dispatch = useAppDispatch();
  
  const classes = cn({
    [styles.trainTablePage] : true,
    className
  })

  useEffect(()=>{
    dispatch(getTrains())
  }, [])

  return (
  <section className={classes} {...rest}>
    <TableWrapper className={styles.trainsTable}>
      <TrainsTable isLoading={isLoading} trains={trains}/>
    </TableWrapper>
      {openedDescriptionId !== null ? 
    <TableWrapper className={styles.trainCharactericticTable}>
      <TrainCharactericticTable isLoading={isLoading} train={trains[openedDescriptionId]}/>
    </TableWrapper> : null}
  </section>
)
}
export default TrainTablePage;