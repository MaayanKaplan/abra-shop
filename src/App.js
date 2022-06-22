import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import MyCart from "./Components/MyCart";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import BestSellers from "./Pages/BestSellers";
import Clothing from "./Pages/Clothing";
import Home from "./Pages/Home";
import Office from "./Pages/Office";
import Sports from "./Pages/Sports";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container>
        <Routes>
          <Route path="/bestSellers" element={<BestSellers />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/office" element={<Office />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
        <MyCart />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;
