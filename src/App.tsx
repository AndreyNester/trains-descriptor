import { useEffect } from 'react';
import TrainsTable from './components/TrainsTable/TrainsTable'
import { useAppDispatch } from './store/hooks';
import { getTrains } from './store/trainSlice';

const App = () : JSX.Element=> {
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(getTrains())
  }, [])

  return (<TrainsTable />)
}

export default App