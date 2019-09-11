import React from "react";

//import any components needed

//Import your array data to from the provided data file

const Operators = ({ updateValue, calculateValue }) => {

  const [operatorsData] = useState(operators)

  const clickOperatorBtn = btn => {
    if (btn === '=') {
      resetValue();
    } else {
      updateValue(btn);
    }
  }


}
return (
  <div>
    {operatorsData.map(operator => <OperatorButton key={operator.char} operator={operator} clickOperatorBtn={() => clickOperatorBtn(operator.value)} />)}
  </div>
);


export default Operators
