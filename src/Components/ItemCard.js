import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import { deviceSize } from "../Utils/constants";

const AddItem = (e) => {
  e.preventDefault();
  console.log("add");
};

const ItemCard = ({ item, ...props }) => {
  return (
    <ItemWrapper key={item.id}>
      <ImageWrapper src={item.image}></ImageWrapper>
      <SubTitle>{item.name}</SubTitle>
      <Pricing>{item.price} ILS</Pricing>
      <Button onClick={AddItem}>ADD TO BAG</Button>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Assistant;
  font-size: 20px;
  text-align: center;
  width: 292px;

  @media (max-width: ${deviceSize.mobile}) {
    width: 160px;
    font-size: 16px;
  }
`;

const ImageWrapper = styled.img`
  width: 292px;
  height: 292px;
  display: block;

  @media (max-width: ${deviceSize.mobile}) {
    width: 160px;
    height: 160px;
  }
`;

const SubTitle = styled.p`
  margin: 16px 0 8px 0;

  @media (max-width: ${deviceSize.mobile}) {
    font-size: 16px;
  }
`;

const Pricing = styled.p`
  color: #808285;
  margin-bottom: 16px;

  @media (max-width: ${deviceSize.mobile}) {
    font-size: 14px;
  }
`;

export default ItemCard;
