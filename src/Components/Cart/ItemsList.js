import { useContext } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { deviceSize } from "../../Utils/constants";
import { StoreContext } from "../../Services/Provider";

export const ItemsList = () => {
  const { cart, addItemToCart, deleteItemFromCart } = useContext(StoreContext);

  return (
    <StyledCartItemsWrapper>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          deleteItem={deleteItemFromCart(item, true)}
          decrementQuantity={deleteItemFromCart(item)}
          incrementQuantity={addItemToCart(item)}
        />
      ))}
    </StyledCartItemsWrapper>
  );
};

const StyledCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 34px;
  overflow-y: auto;
  margin-bottom: 177px;

  @media (max-width: ${deviceSize.mobile}) {
    padding: 0px 18px;
    margin-top: 17px;
    gap: 18px;
    flex-direction: row;
    min-width: 375px;
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 0px;
  }
`;

export default ItemsList;
