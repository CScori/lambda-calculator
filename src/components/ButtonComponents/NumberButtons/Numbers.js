import React from "react";
import { numbers } from './../../../data.js'
import NumberButton from './NumberButton'
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = ({ updateValue }) => {
  const [numbersData ] = useState(numbers)
 
  
  return (
    <div>
      {numbersData.map((number, idx) => <NumberButton key={idx} number={number} clickNumberBtn={() => updateValue(number)} />)
      })
    </div>
  );
    }
 export default Numbers
