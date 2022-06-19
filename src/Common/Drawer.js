import styled from "styled-components";
import * as ReactDOM from "react-dom";

const Drawer = ({ children }) => {
  return ReactDOM.createPortal(
    <StyledPageWrapper>
      <StyledDrawerWrapper>{children}</StyledDrawerWrapper>
    </StyledPageWrapper>,
    document.body
  );
};

const StyledPageWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
const StyledDrawerWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 76.2%;
  height: 100%;
  background-color: #fff;
`;
export default Drawer;
