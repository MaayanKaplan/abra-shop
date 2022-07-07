import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    
    to{
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid #555;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 20px auto;
  animation: ${rotation} 1s linear infinite;
`;

export default Spinner;
