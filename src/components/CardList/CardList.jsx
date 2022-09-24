import { useState, useRef, useEffect } from "react";
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
  TotalSection,
  CardDescription,
  CardPrice,
  AddButton,
  CartCount,
  LoadMore,
  CreateProducts,
  TotalPrice,
  CartSection,
  CartItemDescription,
  CartItemPrice,
  CartItemTitle,
  CartDeleteButton,
} from "./style";
import audi from "../../img/cards/audi.jpg";
import iconCart from "../../img/icons/shopping-cart.png";
import Data from "../data/Data";

const CardList = () => {
  const [sortValue, setSortValue] = useState("");
  const [totalPrace, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [loadElements, setLoadELements] = useState(10);
  const [productsEnd, setProductsEnds] = useState(false);

  const { dataInfo } = Data();

  const cartRef = useRef();
  const loadMoreRef = useRef();

  useEffect(() => {
    onLoadElements(loadElements);
    // eslint-disable-next-line
  }, []);

  const onLoadElements = (loadElements) => {
    const slicedElements = dataInfo.slice(0, loadElements);
    setLoadELements(loadElements + 9);
    setProducts(slicedElements);
  };

  const LoadProducts = () => {
    if (dataInfo.length === products.length) {
      setProductsEnds(true);
      loadMoreRef.current.classList.add("end");
    } else {
      const slicedElements = dataInfo.slice(loadElements - 9, loadElements);
      setLoadELements(loadElements + 9);
      setProducts([...products, ...slicedElements]);
    }
  };

  const SortProducts = (value) => {
    setSortValue(value);
    if (value === "Popular") {
      setProducts(products.sort().reverse());
    } else if (value === "A-Z") {
      const sortedProducts = products.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setProducts(sortedProducts);
    } else {
      setProducts(products.sort().reverse());
    }
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

  const openMore = (target) => {
    const openMore = document.querySelector(".open-more.active");
    if (openMore) {
      openMore.classList.remove("active");
      target.classList.add("active");
    }
    target.classList.add("active");
  };

  return (
    <CardSection>
      <CardInner>
        <CardHeader>
          <Sort onChange={(e) => SortProducts(e.target.value)}>
            <option value="Popular">Popular</option>
            <option value="A-Z">A to Z</option>
            <option value="Z-A">Z to A</option>
          </Sort>
          <Cart className="cart-icon" ref={cartRef} onClick={onCart}>
            <CartCount className="cart-count">0</CartCount>
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
                <CartItem>
                  <CartItemTitle>Audi</CartItemTitle>
                  <CartItemDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </CartItemDescription>
                  <CartItemPrice>100$</CartItemPrice>
                  <CartDeleteButton>X</CartDeleteButton>
                </CartItem>
              </CartList>
              <TotalSection>
                <TotalPrice>{totalPrace + "$"}</TotalPrice>
              </TotalSection>
            </CartInner>
          </CartSection>
        </CardHeader>
        <CardLists>
          {products.map(({ title, description, price, id }) => {
            return (
              <Card key={id}>
                <ButtonSection
                  className="open-more"
                  onClick={(e) => openMore(e.target)}
                >
                  <EditButton className="edit-button">
                    <IconEdit />
                    Edit
                  </EditButton>
                  <DeleteButton className="delete-button">
                    <IconDelete />
                    Delete
                  </DeleteButton>
                </ButtonSection>
                <CardImg src={audi} alt="photo" />
                <CardTitle className="card-title">{title}</CardTitle>
                <CardDescription className="card-description">
                  {description}
                </CardDescription>
                <CardPrice>{price + "$"}</CardPrice>
                <AddButton>
                  <img className="cart" src={iconCart} alt="Cart Icon" />
                  {"Add to cart"}
                </AddButton>
              </Card>
            );
          })}
        </CardLists>
        <LoadMore
          ref={loadMoreRef}
          disabled={productsEnd}
          onClick={LoadProducts}
        >
          Load More
        </LoadMore>
      </CardInner>
      <CreateProducts className="a">Create Products</CreateProducts>
    </CardSection>
  );
};

export default CardList;
