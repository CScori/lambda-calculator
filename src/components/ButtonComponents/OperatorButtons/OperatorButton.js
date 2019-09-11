import React from "react";
import { operators } from "../../../data";

const OperatorButton = ({ operator: {char}, clickOperatorBtn }) => {
  return (
    <>
    <button onClick={clickOperatorBtn}>{char}</button>
    </>
  );
};
export default OperatorButton
