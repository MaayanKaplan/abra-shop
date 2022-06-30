import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import MyCart from "./Components/Cart/MyCart";
import { deviceSize } from "./Utils/constants";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import ItemsPage from "./Components/ItemsPage";

import styled from "styled-components";

function App() {
  const [items, setItems] = useState([]);
  const AppContext = React.createContext({ items, setItems });

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container>
        <Routes>
          <Route
            path="/best-seller"
            element={<ItemsPage category="best-seller" title="Best sellers" />}
          />
          <Route
            path="/clothing"
            element={<ItemsPage category="clothing" title="Clothing" />}
          />
          <Route
            path="/home"
            element={<ItemsPage category="home" title="Home" />}
          />
          <Route
            path="/office"
            element={<ItemsPage category="office" title="Office" />}
          />
          <Route
            path="/sports"
            element={<ItemsPage category="sports" title="Sports" />}
          />
        </Routes>
        <MyCart />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${deviceSize.mobile}) {
    flex-direction: column-reverse;
  }
`;
