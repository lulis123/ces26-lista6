import {combineReducers} from 'redux';
const APPEND = "APPEND";
const CALCULATE = "CALCULATE";

const initialState = {
    expression: "",
    value: 0
}

function expressionReducer(state = initialState,action){
    switch(action.type){
        case APPEND:
            return{
                ...state,
                expression: expression + action.payload
            }
        case CALCULATE:
            return{
                ...state,
                expression: String(eval(expression))
            }
    }
}

const rootReducer = combineReducers({
    expression: expressionReducer
})

export default rootReducer