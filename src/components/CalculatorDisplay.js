import React, {Component} from 'react';
import {connect} from 'react-redux';

class CalculatorDisplay extends Component{

    render(){
        return(
            <div
                className = "calculatorDisplay"
                onClick={()=>this.props.buttonClick(this.props.value)}    
            >
                {this.props.expression}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    expression: state.expression
});

export default connect(mapStateToProps=mapStateToProps,mapDispatchToProps=null)(CalculatorDisplay)