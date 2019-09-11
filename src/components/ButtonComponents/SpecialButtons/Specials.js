import React from "react";
import { specials } from './../../../data.js'
import SpecialButton from "./SpecialButton"

//import any components needed

//Import your array data to from the provided data file

const Specials = ({ updateValue, resetValue }) => {
  const [specialValue] = useState(specials)

  const clickSpecialButton = btn => {
    if (btn === 'C') {
      resetValue();
    } else {
      updateValue (btn) ;
    }
  }
  return (
    <div>
     {specialValue.map(special => {
       <SpecialButton key={special} special={special} updateValue={() => clickSpecialButton(special)} />
     })}
    </div>
  );
};
export default Specials