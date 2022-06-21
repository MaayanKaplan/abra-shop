import React from "react";
import styled from "styled-components";
import WebTitle from "../Common/WebTitle";
import ItemCard from "../Components/ItemCard";
import { Data } from "../Utils/Data";

const filteredData = Data.filter((item) => item.category === "Office");

const Office = () => {
  return (
    <Container>
      <WebTitle>Office</WebTitle>
      <ItemCard data={filteredData}></ItemCard>
    </Container>
  );
};

export default Office;

const Container = styled.div`
  padding-left: 24px;
`;
