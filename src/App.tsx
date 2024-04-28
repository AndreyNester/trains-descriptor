import TrainsTable from './components/TrainsTable/TrainsTable'
import { trainsApi } from './features/train/getTrains'

const App = () : JSX.Element=> {

  trainsApi.getTrains().then((res)=>console.log(res))

  return (<TrainsTable />)
}

export default App