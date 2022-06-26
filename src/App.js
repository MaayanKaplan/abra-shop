import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import MyCart from "./Components/MyCart";
import { Route, Routes } from "react-router-dom";

import ItemsPage from "./Components/ItemsPage";

import styled from "styled-components";

// import BestSellers from "./Pages/BestSellers";
// import Clothing from "./Pages/Clothing";
// import Home from "./Pages/Home";
// import Office from "./Pages/Office";
// import Sports from "./Pages/Sports";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container>
        <Routes>
          <Route path="/bestSellers" element={<ItemsPage />} />
          <Route path="/clothing" element={<ItemsPage category="Clothing" />} />
          <Route path="/home" element={<ItemsPage category="Home" />} />
          <Route path="/office" element={<ItemsPage category="Office" />} />
          <Route path="/sports" element={<ItemsPage category="Sports" />} />
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
