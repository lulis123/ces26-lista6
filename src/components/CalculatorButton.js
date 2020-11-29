import React, {Component} from 'react';
import {connect} from 'react-redux';
import {appendOperand,calculateExpression,clearExpression} from '../actions'

class CalculatorButton extends Component{

    render(){
        return(
            <button
                className = "calculatorButton"
                onClick={()=>this.props.buttonClick(this.props.value)}    
            >
                {this.props.value}
            </button>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({
    buttonClick: (inputValue) => {
        if(inputValue == "="){
            return dispatch(calculateExpression());
        }
        if(inputValue == "CE"){
            return dispatch(clearExpression());
        }
        return dispatch(appendOperand(inputValue));
    }
})

export default connect(null,mapDispatchToProps)(CalculatorButton)