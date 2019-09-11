import React, { useState } from "react";
import "./App.css";
import Display from './components/DisplayComponents/Display'

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"

const [displayValue, setDisplayValue] = useState('0+5')
const updateValue = param => {
  setDisplayValue(displayValue === '0' ? param : displayValue + param);
}
const resetValue = () => setDisplayValue('0')



function App() {

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display displayValue={displayValue} />
        <div className="buttonsCont">
          <div>
            <Numbers updateValue={updateValue}/>
            <Specials updateValue={updateValue} resetValue={resetValue} />
          </div>
        </div>
        <div className="operatorChar">
          <div><span>
            <Operators updateValue={updateValue} calculateValue={calculateValue} />
         </span></div>
        </div>
      </div>
    </div>
  );
}

export default App;