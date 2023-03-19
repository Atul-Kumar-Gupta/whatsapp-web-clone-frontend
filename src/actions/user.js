import * as Axios from "axios";
import { getAuthHeader } from "../utils/authHeader";
export const getInfo = () => {
    const url = `${process.env.REACT_APP_BASE_URL}/v1/get-info`;
    return Axios.get(url, getAuthHeader()).then((res) => {
        return res.data;
    })
};
