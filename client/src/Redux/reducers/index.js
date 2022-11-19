import { GET_COUNTRIES, GET_MATCHS_FROM_GROUPS, GET_MATCHS_FROM_GROUP, GET_PRODE, UPDATE_PRODE, GET_PRODE_POINTS } from "../consts"

const initialState = {
    userProde: {},
    allGroupsMatchs: [],
    allCountries: [],
    matchsFromGroup: [],
    allProdePoints: []
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MATCHS_FROM_GROUPS:
            return {
                ...state,
                allGroupsMatchs: action.payload
            }
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
        case GET_PRODE:
            return {
                ...state,
                userProde: action.payload
            }
        case UPDATE_PRODE:
            return {
                ...state,
                userProde: action.payload
            }
        case GET_PRODE_POINTS:
            return {
                ...state,
                allProdePoints: action.payload
            }
        default:
            return state
    }

}


export default rootReducer;