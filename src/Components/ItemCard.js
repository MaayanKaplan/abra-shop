import React from "react";
import styled from "styled-components";
import { Data } from "../Utils/Data";
import Button from "../Common/Button";

const AddItem = (e) => {
  e.preventDefault();
  console.log("add");
};

const ItemCard = () => {
  return (
    <Container>
      {Data.map((data, key) => {
        return (
          <ItemWrapper>
            <ImageWrapper src={data.image}></ImageWrapper>
            <SubTitle>{data.name}</SubTitle>
            <Pricing>{data.price}</Pricing>
            <Button onClick={AddItem}>ADD TO BAG</Button>
          </ItemWrapper>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  justify-content: center;

  margin-bottom: 117px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageWrapper = styled.img`
  width: 292px;
  height: 292px;
`;

const SubTitle = styled.p`
  font-family: Assistant;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  color: #000;
  margin: 16px 0 8px 0;
`;

const Pricing = styled.p`
  font-family: Assistant;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  color: #808285;
  margin-bottom: 16px;
`;

export default ItemCard;
