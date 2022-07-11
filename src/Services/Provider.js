import { createContext, useEffect, useState, useMemo } from "react";
import { SERVER_URL, ITEMS_ENDPOINT } from "../Utils/constants";

export const StoreContext = createContext([]);

export const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");

  const fetchData = async () => {
    try {
      const res = await fetch(SERVER_URL + "/" + ITEMS_ENDPOINT);
      const data = await res.json();
      setItems(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const addItemToCart = (item) => {
    const storeItem = items.find((element) => element.id === item.id);
    const cartItem = cart.find((element) => element.id === item.id);
    let cartCopy = [...cart];

    if (storeItem.quantity === 0) return;
    if (cartItem) {
      if (storeItem.quantity === cartItem.quantity) return;
      cartItem.quantity++;
      // setCart([...cart]);
    } else {
      const newCartItem = {
        name: item.name,
        id: item.id,
        price: item.price,
        image: item.image,
        quantity: 1,
      };
      cartCopy.push(newCartItem);
      // setCart([...cart, newCartItem]);
    }
    setCart(cartCopy);
    localStorage.setItem("cart", JSON.stringify(cartCopy));
  };

  const deleteItemFromCart = (item, forceDelete = false) => {
    const cartItem = cart.find((element) => element.id === item.id);
    let cartCopy = [...cart];

    if (!cartItem) return;

    cartItem.quantity--;
    if (cartItem.quantity <= 0 || forceDelete) {
      // const updatedCart = cart.filter((element) => element.id !== item.id);
      cartCopy = cartCopy.filter((element) => element.id !== item.id);
      setCart(cartCopy);
      // localStorage.setItem("cart", JSON.stringify(updatedCart));
      // localStorage.setItem("cart", JSON.stringify(cartCopy));
      // setCart(updatedCart);
    } else {
      setCart([...cart]);
      localStorage.setItem("cart", JSON.stringify(cartCopy));
    }
  };

  const storeItems = useMemo(() => {
    return items.map((item) => {
      const newItem = { ...item };
      const cartItem = cart.find((element) => element.id === newItem.id);

      if (cartItem) {
        newItem.quantity -= cartItem.quantity;
      }
      return newItem;
    });
  }, [items, cart]);

  const checkout = () => {
    const newItems = items.map((item) => {
      const cartItem = cart.find((element) => element.id === item.id);
      const newItem = { ...item };
      if (cartItem) {
        newItem.quantity -= cartItem.quantity;
      }
      return newItem;
    });
    setItems(newItems);
    setCart([]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let localCartParsed = JSON.parse(localCart);
    if (localCartParsed) setCart(localCartParsed);
  }, [localCart]);

  const value = {
    cart,
    addItemToCart,
    deleteItemFromCart,
    storeItems,
    checkout,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
