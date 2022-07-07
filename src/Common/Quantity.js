import styled from "styled-components";
import { deviceSize } from "../Utils/constants";

const Quantity = ({ quantity, decrementQuantity, incrementQuantity }) => {
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

  span {
    margin: 0 2px 0 2px;
  }

  @media (max-width: ${deviceSize.mobile}) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: #808285;
  cursor: pointer;
`;
