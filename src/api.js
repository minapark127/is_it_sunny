import axios from "axios";
import { APPID } from "./key";

function Api(lat, long) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${APPID}&units=metric`
  );
}

export default Api;
