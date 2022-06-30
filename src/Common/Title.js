import styled from "styled-components";

const Title = styled.h1`
  font-family: Assistant;
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  color: #1a223e;
  margin: 64px 0 40px 0;

  @media (max-width: 880px) {
    font-size: 24px;
    text-align: center;
    margin: 0 auto 24px auto;
  }
`;

export default Title;
