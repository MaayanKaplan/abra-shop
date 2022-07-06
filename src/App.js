import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import MyCart from "./Components/Cart/MyCart";
import { deviceSize } from "./Utils/constants";
import { Route, Routes } from "react-router-dom";
import React, { useState, createContext } from "react";

import ItemsPage from "./Components/ItemsPage";
import styled from "styled-components";

import { StoreProvider } from "./Services/Provider";

// export const AppContext = React.createContext({
//   items: [],
//   setItems: () => [],
// });

export const AppContext = createContext([]);

function App() {
  const [items, setItems] = useState([]);
  console.log(items);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <AppContext.Provider value={[items, setItems]}>
        <Container>
          <Routes>
            <Route
              path="/best-seller"
              element={
                <ItemsPage category="best-seller" title="Best sellers" />
              }
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
      </AppContext.Provider>
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
