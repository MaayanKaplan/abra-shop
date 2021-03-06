import styled from "styled-components";
import DeleteButtonImage from "../../Images/delete.svg";
import { deviceSize } from "../../Utils/constants";
import Quantity from "../../Common/Quantity";

const CartItem = ({
  image,
  name,
  price,
  quantity,
  deleteItem,
  item,
  decrementQuantity,
  incrementQuantity,
  ...props
}) => {
  return (
    <StyledCartItemWrapper>
      <StyledCartItemImage src={image}></StyledCartItemImage>
      <StyledCartItemDetailsWrapper>
        <StyledCartItemTitle>{name}</StyledCartItemTitle>
        <StyledCartItemPrice>{price} ILS</StyledCartItemPrice>
        <Quantity
          quantity={quantity}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
      </StyledCartItemDetailsWrapper>
      <StyledDeleteButtonImage onClick={deleteItem} src={DeleteButtonImage} />
    </StyledCartItemWrapper>
  );
};

const StyledCartItemWrapper = styled.div`
  font-family: Assistant;
  font-size: 20px;
  line-height: 1;
  display: flex;
  position: relative;

  @media (max-width: ${deviceSize.mobile}) {
    flex-direction: column;
    font-size: 16px;
    margin-bottom: 28px;
  } ;
`;

const StyledCartItemImage = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: ${deviceSize.mobile}) {
    position: relative;
    min-width: 125px;
    min-height: 125px;
    display: inline-block;
  } ;
`;

const StyledCartItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 11px;
  @media (max-width: ${deviceSize.mobile}) {
    gap: 0px;
  }
`;

const StyledCartItemTitle = styled.span`
  color: #000;
  @media (max-width: ${deviceSize.mobile}) {
    margin-top: 12px;
    margin-bottom: 8px;
  }
`;

const StyledCartItemPrice = styled.span`
  color: #808285;
  @media (max-width: ${deviceSize.mobile}) {
    font-size: 14px;
  }
`;

const StyledDeleteButtonImage = styled.img`
  position: absolute;
  cursor: pointer;
  bottom: 0;
  right: 0px;
  @media (max-width: ${deviceSize.mobile}) {
    top: 8px;
    right: 8px;
  } ;
`;

export default CartItem;
