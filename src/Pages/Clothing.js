import React from "react";
import styled from "styled-components";
import WebTitle from "../Common/WebTitle";
import ItemCard from "../Components/ItemCard";
import { Data } from "../Utils/Data";

const filteredData = Data.filter((item) => item.category === "Clothing");

const Clothing = () => {
  return (
    <Container>
      <WebTitle>Clothing</WebTitle>
      <ItemCard data={filteredData}></ItemCard>
    </Container>
  );
};

export default Clothing;

const Container = styled.div`
  /* display: grid;
  grid-template-columns: 5fr 1fr; */
  padding-left: 24px;
`;
