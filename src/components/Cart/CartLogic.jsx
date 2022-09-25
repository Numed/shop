import {
  Cart,
  CartHeader,
  CartInner,
  CartItem,
  CartList,
  CartTitle,
  ButtonBack,
  TotalSection,
  CartCount,
  TotalPrice,
  CartSection,
  CartItemDescription,
  CartItemPrice,
  CartItemTitle,
  CartDeleteButton,
} from "./style";

import { useRef, useContext, useEffect } from "react";
import { Context } from "../Context/Context";
import { useHttp } from "../../hooks/http.hooks";

const CartLogic = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    setTotalPrice,
    counter,
    setCounter,
    cart,
    setCart,
    products,
  } = useContext(Context);

  const { request } = useHttp();

  useEffect(() => {
    request("https://shop-backen.herokuapp.com/cart", "GET")
      .then(onSetCart)
      .catch((e) => new Error(e));
    // eslint-disable-next-line
  }, []);

  const onSetCart = (items) => {
    setCart([...items]);
    let countPrice = 0;
    items.map(({ price }) => {
      countPrice += price;
      return countPrice;
    });
    setTotalPrice(totalPrice + countPrice);
    setCounter(items.length);
  };

  const onCart = () => {
    if (cartRef.current.classList.contains("active")) {
      cartRef.current.classList.remove("active");
    } else {
      cartRef.current.classList.add("active");
    }
  };

  const closeCart = (target) => {
    target.parentElement.parentElement.classList.remove("active");
    cartRef.current.classList.remove("active");
    if (target.parentElement.parentElement.classList.contains("cart-icon")) {
      if (target.classList.contains("btn-back")) {
        target.parentElement.parentElement.classList.remove("active");
        cartRef.current.classList.remove("active");
      }
    }
  };

  const removeFromCart = (target) => {
    let cartItem = target.parentElement,
      cartTitle = cartItem.querySelector(".cart-inner__title").textContent,
      cartPrice = cartItem.querySelector(".cart-inner__price").textContent;

    const cardSelected = products.filter((item) => item.title === cartTitle);

    cartPrice = +cartPrice.slice(0, 3);
    setCounter((counter) => counter - 1);
    setTotalPrice((totalPrice) => totalPrice - cartPrice);
    const filterItem = cart.filter((item) => item.title !== cartTitle);
    setCart([...filterItem]);
    request(
      `https://shop-backen.herokuapp.com/cart/${cardSelected[0].id}`,
      "DELETE"
    );
  };

  return (
    <>
      <Cart className="cart-icon" ref={cartRef} onClick={onCart}>
        <CartCount className="cart-count">{counter}</CartCount>
      </Cart>
      <CartSection className="cart-section">
        <CartHeader className="cart-header">
          <ButtonBack
            className="btn-back"
            onClick={(e) => closeCart(e.target)}
          />
          <CartTitle>Your cart</CartTitle>
        </CartHeader>
        <CartInner className="cart-inner">
          <CartList>
            {cart.length > 0 ? (
              cart.map(({ title, description, price }, i) => {
                return (
                  <CartItem key={i}>
                    <CartItemTitle className="cart-inner__title">
                      {title}
                    </CartItemTitle>
                    <CartItemDescription className="cart-inner__description">
                      {description}
                    </CartItemDescription>
                    <CartItemPrice className="cart-inner__price">
                      {price}$
                    </CartItemPrice>
                    <CartDeleteButton onClick={(e) => removeFromCart(e.target)}>
                      X
                    </CartDeleteButton>
                  </CartItem>
                );
              })
            ) : (
              <CartTitle>Your cart is empty</CartTitle>
            )}
          </CartList>
          <TotalSection
            style={cart.length > 0 ? { display: "block" } : { display: "none" }}
          >
            <TotalPrice>{totalPrice + "$"}</TotalPrice>
          </TotalSection>
        </CartInner>
      </CartSection>
    </>
  );
};

export default CartLogic;
