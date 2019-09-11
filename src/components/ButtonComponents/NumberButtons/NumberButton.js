import React from "react";

const NumberButton = (props) => {
  return (
    <>
      <button onCLick={props.clickNumberButn}>{props.number}</button>
    </>
  );
};
export default NumberButton