import styled from "styled-components";
import { deviceSize } from "../Utils/constants";

const Button = ({ children, className, ...props }) => {
  return (
    <StyledButton {...props} className={className}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100%;
  height: 42px;
  font-family: Assistant;
  font-weight: bold;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.72px;
  padding: 12px 0;
  border: solid 1px #000;
  background-color: #fff;

  &:hover {
    border: solid 1px #000;
    background-color: #000;
    color: #fff;
  }

  &:disabled {
    border: solid 1px #808080;
    background-color: #808080;
    color: #fff;
  }

  @media (max-width: ${deviceSize.mobile}) {
    width: 100%;
    height: 34px;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: 0.56px;
    padding: 8px 0;
  }
`;

export default Button;
