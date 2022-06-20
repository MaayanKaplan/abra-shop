import React from "react";
import styled from "styled-components";
import WebTitle from "../Common/WebTitle";
import Button from "../Common/Button";
import EmptyImg from "../Images/empty-cart.png";

const MyCart = () => {
  return (
    <>
      <Container>
        <WebTitle>My Cart</WebTitle>
        <img src={EmptyImg} alt="" /> <TotalWrapper></TotalWrapper>
        <p>Your cart is empty</p>
        <Button margin small>
          CHECKOUT
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  grid-column: 6 / 7;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  padding-left: 24px;
  margin-left: 24px;

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
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MyCart;
