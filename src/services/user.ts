import axios from "axios";
import { BASE_URL } from "../ultis/system";

export function findByUser(username: string) {
    return axios.get(`${BASE_URL}/${username}`);
}
