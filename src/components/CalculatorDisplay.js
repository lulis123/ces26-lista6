import React, {Component} from 'react';
import {connect} from 'react-redux';

class CalculatorDisplay extends Component{

    render(){
        return(
            <div
                className = "calculatorDisplay"
            >
                {this.props.expression.expression}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    expression: state.expression
});

export default connect(mapStateToProps,null)(CalculatorDisplay)