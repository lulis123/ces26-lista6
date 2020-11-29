import React, {Component} from 'react';
import {connect} from 'react-redux';
import {appendOperand,calculateExpression} from '../actions'

class CalculatorButton extends Component{

    render(){
        return(
            <button
                className = "calculateButton"
                onClick={()=>this.props.buttonClick(this.props.value)}    
            >
                {this.props.value}
            </button>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    buttonClick: (inputValue) => {
        if(inputValue == "="){
            return dispatch(calculateExpression());
        }
        return dispatch(appendOperand(inputValue));
    }
})

export default connect(mapStateToProps=null,mapDispatchToProps=mapDispatchToProps)(CalculatorButton)