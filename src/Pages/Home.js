import React from "react";
import styled from "styled-components";
import WebTitle from "../Common/WebTitle";
import ItemCard from "../Components/ItemCard";
import { Data } from "../Utils/Data";

const filteredData = Data.filter((item) => item.category === "Home");

const Home = () => {
  return (
    <Container>
      <WebTitle>Home</WebTitle>
      <ItemCard data={filteredData}></ItemCard>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-left: 24px;
`;
