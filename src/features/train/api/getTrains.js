import axios from "axios";
import BASE_URL from "./constants";
class TrainsApi {
    async getTrains() {
        const res = (await axios(BASE_URL)).data;
        return res;
    }
}
export const trainsApi = new TrainsApi();
