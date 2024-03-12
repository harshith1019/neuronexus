import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

/** check user auth  */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/** get server data */
export async function getServerData(_url, callback) {
    try {
        const baseUrl = process.env.REACT_APP_API;
        const endpoint = "/api/questions";
        const apiUrl = baseUrl + endpoint;
      const data = (await axios.get(apiUrl))?.data;
      return callback ? callback(data) : data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
  
  export async function postServerData(_url, result, callback) {
    try {
      const data = (await axios.post(`${process.env.REACT_APP_API}/api/result/post`, result))?.data;
      return callback ? callback(data) : data;
    } catch (error) {
      console.error("Error posting data:", error);
      return null;
    }
  }
  