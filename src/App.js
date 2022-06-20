import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import WebTitle from "./Common/WebTitle";
import ItemCard from "./Components/ItemCard";
import MyCart from "./Components/MyCart";

import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container>
        <div>
          <WebTitle>Best Sellers</WebTitle>
          <ItemCard></ItemCard>
        </div>
        <MyCart></MyCart>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  /* grid-template-columns: repeat(6, 1fr); */
  grid-template-columns: 5fr 1fr;
  padding: 0 24px;
  /* margin-left: 24px;
  margin-right: 24px; */
`;

export default App;
