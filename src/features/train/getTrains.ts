import axios from "axios";
import { IGetTrainsResponse } from "../../entities/train/types";
import BASE_URL from "./constants";

class TrainsApi {

  async getTrains () : Promise<IGetTrainsResponse> {
    const res : IGetTrainsResponse = (await axios<IGetTrainsResponse>(BASE_URL)).data;
    
    return res;
  }

}

export const trainsApi = new TrainsApi();