import styled from "styled-components";
import iconCart from "../../img/icons/shopping-cart.png";
import arrow from "../../img/icons/left-arrow.png";

export const Cart = styled.div`
  width: 32px;
  height: 32px;
  background: url(${iconCart}) no-repeat center;
  position: relative;
  cursor: pointer;

  &.active {
    cursor: auto;
    display: none;
    background: none;
  }

  &.active ~ .cart-section {
    display: block;
  }

  &.active > .cart-count {
    display: none;
  }
`;

export const CartCount = styled.div`
  position: absolute;
  top: -12px;
  right: -10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #c81e45;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartSection = styled.div`
  position: absolute;
  top: 0;
  left: 75%;
  display: none;
  width: 350px;
  height: 150px;
  z-index: 3;
  background-color: #2f2f2f;
  overflow-y: scroll;
  padding: 20px;
`;

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
`;

export const ButtonBack = styled.button`
  z-index: 5;
  width: 32px;
  filter: invert(1);
  height: 32px;
  background: url(${arrow}) no-repeat center;
  cursor: pointer;
`;

export const CartTitle = styled.h2`
  font-size: 22px;
  letter-spacing: 1.1px;
  line-height: 38px;
  font-weight: 600;
  color: #fff;
`;

export const CartInner = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CartList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CartItem = styled.li`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartItemDescription = styled.p`
  margin-left: 5px;
  font-size: 10px;
  color: #fff;
  letter-spacing: 1.1px;
  text-align: center;
`;

export const CartItemPrice = styled.span`
  font-size: 14px;
  color: #fff;
  letter-spacing: 1.1px;
  font-weight: 600;
`;

export const CartItemTitle = styled.span`
  font-size: 14px;
  color: #c81e45;
  letter-spacing: 1.1px;
  font-weight: 600;
`;

export const CartDeleteButton = styled.button`
  color: #c81e45;
  font-size: 19px;
  cursor: pointer;
  margin-left: 10px;
`;

export const TotalSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

export const TotalPrice = styled.span`
  font-size: 18px;
  color: #c81e45;
  font-weight: 600;
`;
