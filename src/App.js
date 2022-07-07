import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import MyCart from "./Components/Cart/MyCart";
import { deviceSize } from "./Utils/constants";
import { Route, Routes } from "react-router-dom";
import ItemsPage from "./Components/ItemsPage";
import styled from "styled-components";
import { StoreProvider } from "./Services/Provider";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledAppWrapper>
        <Header />

        <StoreProvider>
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <ItemsPage category="best-seller" title="Best sellers" />
                }
              />

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
        </StoreProvider>
      </StyledAppWrapper>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${deviceSize.mobile}) {
    flex-direction: column-reverse;
  }
`;

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default App;
