import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import MyCart from "./Components/Cart/MyCart";
import { deviceSize } from "./Utils/constants";
import { Route, Routes } from "react-router-dom";
import ItemsPage from "./Components/ItemsPage";
import styled from "styled-components";
import { StoreProvider } from "./Services/Provider";
import { DefaultMenuConfig } from "./Utils/DefaultMenuConfig";

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
                path="*"
                element={
                  <ItemsPage category="best-seller" title="Best sellers" />
                }
              />
              {DefaultMenuConfig.map((item) => {
                return (
                  <Route
                    key={item.id}
                    path={item.path}
                    element={
                      <ItemsPage category={item.category} title={item.name} />
                    }
                  />
                );
              })}
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
  position: relative;

  /* background-color: green; */
`;

export default App;
