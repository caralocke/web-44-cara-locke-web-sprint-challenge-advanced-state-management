import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ADD_ERROR } from '../actions'
//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

//2. Add in the arguments needed to complete a standard reducer function.
export const reducer = (state = initialState, action)=>{
    switch(action.type) {
        //3. Add in a reducer case to accomidate the start of a smurf fetch.
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        //4. Add in a reducer case to accomidate the successful smurf api fetch.
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        //5. Add in a reducer cases to accomidate the failed smurf api fetch.
        case FETCH_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        //6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
        case ADD_SMURF:
            // const newSmurf = [{
            //     name: action.payload,
            //     nickname: action.payload,
            //     position: action.payload,
            //     description: action.payload,
            // }]
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isLoading: false
            }
        //7. Add in a reducer case that adds in a value to the error message.
        case ADD_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}

export default reducer;

