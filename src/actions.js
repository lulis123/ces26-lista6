export const appendOperand = (value)=>{
    return {
        type: "append",
        payload: value
    };
}

export const calculateExpression = () => {
    return{
        type: "calculate"
    }
}

