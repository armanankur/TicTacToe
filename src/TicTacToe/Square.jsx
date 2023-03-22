import React from "react";
import styled from "./Square.module.css";
const Square = ({ value, onClick }) => {
  return (
    <div className={styled.square} onClick={onClick}>
      <h5>{value}</h5>
    </div>
  );
};
export default Square;
