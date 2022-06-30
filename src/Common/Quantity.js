import React, { useState } from "react";
import styled from "styled-components";
import { deviceSize } from "../Utils/constants";

const Quantity = () => {
  const [quantity, setQuantity] = useState(0);

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
    if (quantity <= 0) {
      setQuantity(0);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  return (
    <QuantityWrapper>
      <StyledButton onClick={decrementQuantity}>-</StyledButton>
      <span>{quantity}</span>
      <StyledButton onClick={incrementQuantity}>+</StyledButton>
    </QuantityWrapper>
  );
};

export default Quantity;

const QuantityWrapper = styled.div`
  font-size: 20px;
  color: #808285;
  margin-top: auto;

  @media (max-width: ${deviceSize.mobile}) {
    margin-top: 12px;
    font-size: 16px;

    span {
      margin: 0 2px 0 2px;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: #808285;
  cursor: pointer;
`;
