import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button onCLick={props.updateValue}>{props.special}</button>
    </>
  );
};

export default SpecialButton
