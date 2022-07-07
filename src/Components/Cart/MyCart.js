import styled from "styled-components";
import { deviceSize } from "../../Utils/constants";
import EmptyCart from "../Cart/EmptyCart";
import ItemsList from "./CartItemsList";
import Button from "../../Common/Button";
import Title from "../../Common/Title";
import { useContext } from "react";
import { StoreContext } from "../../Services/Provider";

const MyCart = () => {
  const { cart, checkout } = useContext(StoreContext);

  const getCartSubtotal = () => {
    let sum = 0;
    for (const item of cart) {
      sum += item.quantity * item.price;
    }

    return sum;
  };

  const sum = getCartSubtotal();

  return (
    <StyledCartWrapper>
      <CartItemsWrapper>
        <StyledCartTitle>My cart</StyledCartTitle>

        {!cart.length ? (
          <EmptyCart />
        ) : (
          <>
            <StyledDescription>
              Items are reserved for 60 minutes
            </StyledDescription>
            <ItemsList cart={cart} />
            <StyledCheckoutWrapper>
              <StyledTotalWrapper>
                <StyledSubtotal>Subtotal:</StyledSubtotal>
                <StyledSubtotalPrice>{sum} ILS</StyledSubtotalPrice>
              </StyledTotalWrapper>
              <StyledCheckoutButton onClick={checkout}>
                CHECKOUT
              </StyledCheckoutButton>
            </StyledCheckoutWrapper>
          </>
        )}
      </CartItemsWrapper>
    </StyledCartWrapper>
  );
};

const StyledCartWrapper = styled.div`
  flex-basis: calc(316px - (24px * 2));
  /* min-width: calc(316px - (24px * 2)); */
  min-width: calc(316px - 6px);
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 40px 24px 0;
  font-family: Assistant;
  height: calc(100vh - 78px);
  position: relative;

  @media (max-width: ${deviceSize.mobile}) {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
    min-height: 393px;
    flex-basis: 393px;
    z-index: 5;
    padding: 24px 0 0;
  }
`;

const StyledCartTitle = styled(Title)`
  text-align: left;
  margin: 0 81px 9px 0;

  @media (max-width: ${deviceSize.mobile}) {
    text-align: center;
    margin: 0 0 17px 0;
  }
`;

const StyledDescription = styled.span`
  font-size: 16px;

  @media (max-width: ${deviceSize.mobile}) {
    display: none;
  }
`;

const CartItemsWrapper = styled.div`
  @media (min-width: ${deviceSize.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;
const StyledCheckoutWrapper = styled.div`
  margin-top: auto;
  @media (max-width: ${deviceSize.mobile}) {
    padding: 0px 18px;
  }
`;
const StyledTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 24px;

  @media (max-width: ${deviceSize.mobile}) {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

const StyledSubtotal = styled.span``;

const StyledSubtotalPrice = styled.span``;

const StyledCheckoutButton = styled(Button)`
  margin-bottom: 24px;

  @media (max-width: ${deviceSize.mobile}) {
    width: 100%;
    justify-content: center;
    font-size: 18px;
    line-height: 1;
    letter-spacing: 0.72px;
    margin-bottom: 24px;
  }
`;

export default MyCart;
