import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";

const AddItem = (e) => {
  e.preventDefault();
  console.log("add");
};

const ItemCard = ({ data }) => {
  return (
    <Container>
      {data.map((data, key) => {
        return (
          <ItemWrapper key={key}>
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
  /* grid-template-columns: repeat(auto-fit, minmax(292px, 1fr)); */

  /* Flex */
  /* display: flex;
  flex-wrap: wrap; */

  gap: 24px;
  justify-content: center;

  margin-bottom: 117px;
  margin-right: 24px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 292px;

  @media (max-width: 880px) {
    width: 160px;
  }
`;

const ImageWrapper = styled.img`
  width: 292px;
  height: 292px;

  @media (max-width: 880px) {
    width: 160px;
    height: 160px;
  }
`;

const SubTitle = styled.p`
  font-family: Assistant;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  color: #000;
  margin: 16px 0 8px 0;

  @media (max-width: 880px) {
    font-size: 16px;
  }
`;

const Pricing = styled.p`
  font-family: Assistant;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  color: #808285;
  margin-bottom: 16px;

  @media (max-width: 880px) {
    font-size: 14px;
  }
`;

export default ItemCard;
