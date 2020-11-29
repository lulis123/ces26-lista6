
function calculator(state,action){
    if (state == undefined){
       return {
           expression:"",
           value:0
        }; 
    }

    let expression = state.expression;
    let value = state.value;

    switch(action.type) {
        case "append":
            return {
                expression: expression + action.payload,
                value:value
            };
        case "calculate":
            value = eval(expression);
            return{
                expresson: String(value),
                value:value
            }
        default:
            return state;

    }
}