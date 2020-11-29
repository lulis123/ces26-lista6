const APPEND = "APPEND";
const CALCULATE = "CALCULATE";

export const appendOperand = (value)=>{
    return {
        type: APPEND,
        payload: value
    };
}

export const calculateExpression = () => {
    return{
        type: CALCULATE
    };
}

