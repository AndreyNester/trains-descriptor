import axios from "axios";
import { IGetTrainsResponse } from "../../entities/train/types";
import BASE_URL from "./constants";

class TrainsApi {

  async getTrains () : Promise<IGetTrainsResponse> {
    const res : IGetTrainsResponse = await axios<IGetTrainsResponse, IGetTrainsResponse>(BASE_URL);
    return res;
  }

}

export const trainsApi = new TrainsApi();