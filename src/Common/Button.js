import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => (props.small ? "267px" : "292px")};
  height: 42px;
  font-family: Assistant;
  font-size: 18px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  border: solid 1px #000;
  background-color: #fff;
  margin-right: ${(props) => (props.margin ? "24px" : "0")};

  &:hover {
    border: solid 1px #000;
    background-color: #000;
    color: #fff;
  }
`;

export default Button;
