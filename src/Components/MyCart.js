import React from "react";
import styled from "styled-components";
import Title from "../Common/Title";
import Button from "../Common/Button";
import EmptyImg from "../Images/empty-cart.png";

const WantedItems = [];

const MyCart = () => {
  return (
    <>
      <Container>
        <Title>My cart</Title>
        {WantedItems.length === 0 && (
            <>
              {WantedItems.map((item) => {
                return (
                  <>
                    <ItemContainer></ItemContainer>
                    <TotalWrapper>
                      <p>Subtotal:</p>
                      <span>172 ILS</span>
                    </TotalWrapper>
                  </>
                );
              })}
            </>
          ) && (
            <>
              <img src={EmptyImg} alt="" /> <TotalWrapper></TotalWrapper>
              <p>Your cart is empty</p>
            </>
          )}
        <Button>CHECKOUT</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  /* grid-column: 6 / 7; */
  min-width: 316px;
  height: 1599px;
  /* margin: 72px 0 0 24px;
  padding: 40px 24px 837px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  /* padding-left: 24px;
  padding-right: 24px; */

  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 880px) {
    order: -1;
  }

  img {
    margin: 0 38px 24px 38px;

    @media (max-width: 880px) {
      width: 167.7px;
      height: 140px;
    }
  }

  p {
    font-family: Assistant;
    font-size: 16px;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #000;
    margin-bottom: 168px;

    @media (max-width: 880px) {
      margin-bottom: 56px;
    }
  }

  @media (max-width: 880px) {
    width: 100vw;
    height: 393px;
    /* margin: 64px 0 36px;
    padding: 24px 18px; */
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;
    align-items: center;
    justify-content: center;
    margin: auto 0;
  }
`;

const ItemContainer = styled.div``;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin: 28px 70px 8px 0;
    font-family: Assistant;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
`;

export default MyCart;
