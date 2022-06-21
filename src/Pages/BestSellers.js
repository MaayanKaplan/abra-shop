import React from "react";
import styled from "styled-components";
import WebTitle from "../Common/WebTitle";
import ItemCard from "../Components/ItemCard";
import MyCart from "../Components/MyCart";
import { Data } from "../Utils/Data";

const data = Data;

const BestSellers = () => {
  return (
    <Container>
      <div>
        <WebTitle>Best Sellers</WebTitle>
        <ItemCard data={data}></ItemCard>
      </div>
      <MyCart></MyCart>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  padding-left: 24px;
`;

export default BestSellers;
