import { IData, IGetTrainsResponse} from "../../../../entities/train/types";

const idGenerator = (arr : IGetTrainsResponse) : Array<IData> => arr.map((item, index)=>({...item, id : index}))

export default idGenerator;