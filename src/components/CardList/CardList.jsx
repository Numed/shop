import { useState, useRef } from "react";
import {
  CardSection,
  CardHeader,
  CardInner,
  Cart,
  CartHeader,
  CartInner,
  CartItem,
  CartList,
  CartTitle,
  Sort,
  ButtonBack,
  Card,
  CardLists,
  ButtonSection,
  EditButton,
  IconEdit,
  IconDelete,
  DeleteButton,
  CardImg,
  CardTitle,
  CardPrice,
  AddButton,
  IconCart,
} from "./style";
import audi from "../../img/cards/audi.jpg";

const CardList = () => {
  const [sortValue, setSortValue] = useState("");
  const [openedCart, setOpenedCart] = useState(false);
  const cartRef = useRef();

  const openCart = () => {
    if (cartRef.current.classList.contains("active")) {
      cartRef.current.classList.remove("active");
      setOpenedCart(false);
    } else {
      cartRef.current.classList.add("active");
      setOpenedCart(true);
    }
  };

  return (
    <CardSection>
      <CardInner>
        <CardHeader>
          <Sort onChange={(e) => setSortValue(e.target.value)}>
            <option value="Popular">Popular</option>
            <option value="Htl">High to low</option>
            <option value="Lth">Low to high</option>
          </Sort>
          <Cart ref={cartRef} onClick={openCart}>
            {openedCart === true ? <View /> : null}
          </Cart>
        </CardHeader>
        <CardLists>
          <Card>
            <ButtonSection>
              <EditButton>
                <IconEdit />
                Edit
              </EditButton>
              <DeleteButton>
                <IconDelete />
                Delete
              </DeleteButton>
            </ButtonSection>
            <CardImg src={audi} />
            <CardTitle>Audi RS7</CardTitle>
            <CardPrice>50.000</CardPrice>
            <AddButton>
              <IconCart /> Add to cart
            </AddButton>
          </Card>
        </CardLists>
      </CardInner>
    </CardSection>
  );
};

const View = () => {
  return (
    <CartHeader>
      <ButtonBack />
      <CartTitle>Your cart</CartTitle>
      <CartInner>
        <CartList>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </CartList>
      </CartInner>
    </CartHeader>
  );
};

export default CardList;
