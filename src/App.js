import { Component } from 'react';
import CalculatorButton from './components/CalculatorButton';
import CalculatorDisplay from './components/CalculatorDisplay';
import './App.css';

class App extends Component {

  render(){
    return(
      <div>
        <CalculatorDisplay/>
        <div className='calculator-input-row'>
          <CalculatorButton value={7}/>
          <CalculatorButton value={8}/>
          <CalculatorButton value={9}/>
          <CalculatorButton value={"CE"}/>
        </div>
        <br/>
        <div>
          <CalculatorButton value={4}/>
          <CalculatorButton value={5}/>
          <CalculatorButton value={6}/>
          <CalculatorButton value={"+"}/>
        </div>
        <br/>
        <div>
          <CalculatorButton value={3}/>
          <CalculatorButton value={2}/>
          <CalculatorButton value={1}/>
          <CalculatorButton value={"-"}/>
        </div>
        <br/>
        <div>
          <CalculatorButton value={'/'}/>
          <CalculatorButton value={"0"}/>
          <CalculatorButton value={"*"}/>
          <CalculatorButton value={"="}/>
        </div>
      </div>
    )
  }

}

export default App;
