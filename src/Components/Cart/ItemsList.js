import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { deviceSize } from "../../Utils/constants";

export const ItemsList = () => {
  return (
    <StyledCartItemsWrapper>
      <CartItem
        name="Black Bottle"
        price={10}
        image={"https://elad-test-1.s3.amazonaws.com/tshirt.png"}
        quantity={5}
      />
      <CartItem
        name="Black Bottle"
        price={10}
        image={"https://elad-test-1.s3.amazonaws.com/tshirt.png"}
        quantity={5}
      />
      <CartItem
        name="Black Bottle"
        price={10}
        image={"https://elad-test-1.s3.amazonaws.com/tshirt.png"}
        quantity={5}
      />
      <CartItem
        name="Black Bottle"
        price={10}
        image={"https://elad-test-1.s3.amazonaws.com/tshirt.png"}
        quantity={5}
      />
      {/* <CartItem
        name="Black Bottle"
        price={10}
        image={"https://elad-test-1.s3.amazonaws.com/tshirt.png"}
        quantity={5}
      /> */}
      {/* <CartItem
        name="Black Bottle"
        price={10}
        image={"https://elad-test-1.s3.amazonaws.com/tshirt.png"}
        quantity={5}
      /> */}
    </StyledCartItemsWrapper>
  );
};

const StyledCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 34px;
  overflow-y: auto;

  @media (max-width: ${deviceSize.mobile}) {
    padding: 0px 18px;
    margin-top: 17px;
    gap: 18px;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export default ItemsList;
