import { useEffect } from 'react';
import TrainsTable from './features/train/ui/TrainsTable/TrainsTable'
import { useAppDispatch } from './app/store/hooks';
import { getTrains } from './app/store/trainSlice';
import TableWrapper from './shared/TableWrapper/TableWrapper';

const App = () : JSX.Element=> {
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(getTrains())
  }, [])

  return (
  <TableWrapper>
    <TrainsTable />
  </TableWrapper>
)
}

export default App