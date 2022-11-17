import { GET_COUNTRIES, GET_MATCHS_FROM_GROUP } from "../consts"

const initialState = {
    allCountries: [],
    matchsFromGroup: []
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_MATCHS_FROM_GROUP:
            return {
                ...state,
                matchsFromGroup: action.payload
            }
        default:
            return state
    }

}


export default rootReducer;