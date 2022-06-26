import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../Common/Title";
import ItemCard from "../Components/ItemCard";
import { Data } from "../Utils/Data";

const ItemsPage = ({ category }) => {
  const [filteredData, setFilteredData] = useState(Data);

  useEffect(() => {
    const newData = [Data.filter((item) => item.category === category)];
    setFilteredData(newData);
  }, [category, setFilteredData]);

  <Container>
    {filteredData.map((item) => {
      return (
        <ItemCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      );
    })}
  </Container>;
};

export default ItemsPage;

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
