import axios from 'axios';
import { GET_COUNTRIES } from '../consts';


export function getCountries() {
    return async function (dispatch) {
        let json = await axios.get("/country/get_all")
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
}

export function chequearEmail(email) {
    return async function (dispatch) {
        let json = await axios.get("/user/chequear_user/" + email)
        return dispatch({
            type: "CHEQUEAR_USER",
            payload: json.data
        })
    }
}