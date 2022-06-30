import styled from "styled-components";
import EmptyCartImage from "../../Images/empty-cart.svg";
import { deviceSize } from "../../Utils/constants";

const EmptyCart = () => {
  return (
    <StyledEmptyCartWrapper>
      <StyledEmptyCartImage
        src={EmptyCartImage}
        alt="Empty cart img"
      ></StyledEmptyCartImage>
      <StyledEmptyCartMessage>Your cart is empty</StyledEmptyCartMessage>
    </StyledEmptyCartWrapper>
  );
};

const StyledEmptyCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  top: 0px;
  gap: 24px;
  position: absolute;
  width: 100%;
  left: 0;

  @media (max-width: ${deviceSize.mobile}) {
    gap: 16px;
    position: relative;
    margin-bottom: 56px;
    margin-top: 46px;
  } ;
`;

const StyledEmptyCartImage = styled.img`
  width: 239px;
  height: 200px;

  @media (max-width: ${deviceSize.mobile}) {
    width: 167px;
    height: 140px;
  }
`;

const StyledEmptyCartMessage = styled.span`
  font-size: 16px;
  color: #000;

  @media (max-width: ${deviceSize.mobile}) {
    font-size: 14px;
  }
`;
export default EmptyCart;
