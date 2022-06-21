import React from "react";
import styled from "styled-components";
import WebTitle from "../Common/WebTitle";
import Button from "../Common/Button";
import EmptyImg from "../Images/empty-cart.png";

const WantedItems = [];

const MyCart = () => {
  return (
    <>
      <Container>
        <WebTitle>My Cart</WebTitle>
        <img src={EmptyImg} alt="" /> <TotalWrapper></TotalWrapper>
        <p>Your cart is empty</p>
        <Button>CHECKOUT</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  grid-column: 6 / 7;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  padding-left: 24px;
  padding-right: 24px;
  width: 316px;
  height: 1599px;
  position: fixed;
  right: 0;
  top: 78px;

  height: 100%;

  background-color: #fff;
  img {
    margin-bottom: 24px;
  }

  p {
    font-family: Assistant;
    font-size: 16px;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #000;
    margin-bottom: 168px;
  }

  @media (max-width: 880px) {
    width: 375px;
    height: 393px;
    margin: 64px 0 36px;
    padding: 24px 18px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;

    position: absolute;
    top: 0;
    right: 0;
  }
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MyCart;
