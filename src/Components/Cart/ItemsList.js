import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { deviceSize } from "../../Utils/constants";

export const ItemsList = ({ items, setItems, ...props }) => {
  return (
    <StyledCartItemsWrapper>
      {items.map((item) => (
        <CartItem item={item} setItems={setItems} />
      ))}
    </StyledCartItemsWrapper>
  );
};

const StyledCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 34px;
  overflow-y: auto;
  margin-bottom: 177px;

  @media (max-width: ${deviceSize.mobile}) {
    padding: 0px 18px;
    margin-top: 17px;
    gap: 18px;
    flex-direction: row;
    min-width: 375px;
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 0px;
  }
`;

export default ItemsList;
