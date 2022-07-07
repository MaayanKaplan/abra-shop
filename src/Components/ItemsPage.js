import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Title from "../Common/Title";
import ItemCard from "./ItemCard";
import Spinner from "../Common/Spinner";
import { deviceSize } from "../Utils/constants";
import { StoreContext } from "../Services/Provider";

const ItemsPage = ({ category, title, ...props }) => {
  const { storeItems, addItemToCart } = useContext(StoreContext);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const newData = storeItems.filter((item) =>
      item.catagories.includes(category)
    );
    setFilteredData(newData);
  }, [category, setFilteredData, storeItems]);

  return (
    <Container>
      {filteredData.length ? (
        <>
          <Title>{title}</Title>
          <ItemsWrapper>
            {filteredData.map((item) => {
              return (
                <ItemCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  addToBag={() => addItemToCart(item)}
                />
              );
            })}
          </ItemsWrapper>
        </>
      ) : (
        <>
          <Spinner />
          <p>Loading...</p>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding-left: 24px;
  overflow-y: auto;
  height: calc(100vh - 78px);

  @media (max-width: ${deviceSize.mobile}) {
    height: calc(100vh - 393px - 78px);
    padding: 36px 18px 0px 18px;
    justify-content: center;
  }
`;

const ItemsWrapper = styled.div`
  /* grid-template-columns: repeat(5, 1fr); */
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(1fr, 292px)); */

  /* Flex */
  display: flex;
  flex-wrap: wrap;

  gap: 48px 24px;
  justify-content: center;
  margin-bottom: 117px;

  @media (max-width: ${deviceSize.mobile}) {
    gap: 20px 18px;
    margin-bottom: 89px;

    /* grid-template-columns: repeat(2, 1fr); */
  }
`;

export default ItemsPage;
