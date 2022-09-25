import { useState, useRef, useEffect } from "react";
import {
  CardSection,
  CardHeader,
  CardInner,
  Sort,
  Card,
  CardLists,
  ButtonSection,
  EditButton,
  IconEdit,
  IconDelete,
  DeleteButton,
  CardImg,
  CardTitle,
  CardDescription,
  CardPrice,
  AddButton,
  LoadMore,
  CreateProducts,
} from "./style";
import audi from "../../img/cards/audi.jpg";
import iconCart from "../../img/icons/shopping-cart.png";
import PopupSection from "../Popup/PopupSection";
import CartLogic from "../Cart/CartLogic";
import { Context } from "../Context/Context";
import { useHttp } from "../../hooks/http.hooks";

const CardList = () => {
  // eslint-disable-next-line
  const [sortValue, setSortValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadElements, setLoadELements] = useState(10);
  const [productsEnd, setProductsEnds] = useState(false);

  const { request } = useHttp();
  const loadMoreRef = useRef();

  const onProducts = (items) => {
    const slicedElements = items.slice(0, loadElements);
    setLoadELements(loadElements + 9);
    setProducts(slicedElements);
  };

  useEffect(() => {
    request("http://localhost:3002/products", "GET")
      .then(onProducts)
      .catch((e) => new Error(e));
    // eslint-disable-next-line
  }, []);

  const LoadProducts = () => {
    request("http://localhost:3002/products", "GET")
      .then(LoadMoreProjects)
      .catch((e) => new Error(e));
  };

  const LoadMoreProjects = (items) => {
    if (products.length === items.length) {
      setProductsEnds(true);
      loadMoreRef.current.classList.add("end");
    } else {
      const slicedElements = items.slice(loadElements - 9, loadElements);
      setLoadELements(loadElements + 9);
      setProducts([...products, ...slicedElements]);
    }
  };

  const SortProducts = (value) => {
    setSortValue(value);
    if (value === "A-Z") {
      const sortedProducts = products.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setProducts(sortedProducts);
    } else {
      setProducts(products.sort().reverse());
    }
  };

  const addToCart = (target) => {
    let card = target.parentElement,
      cardTitle = card.querySelector(".card-title").textContent,
      cardDescription = card.querySelector(".card-description").textContent,
      cardPrice = card.querySelector(".card-price").textContent;

    const newItem = {
      id: +card.dataset.id,
      title: cardTitle,
      description: cardDescription,
      price: +cardPrice.slice(0, 3),
    };

    cardPrice = +cardPrice.slice(0, 3);
    setCounter((counter) => counter + 1);
    setTotalPrice((totalPrice) => totalPrice + cardPrice);
    setCart([
      ...cart,
      { title: cardTitle, description: cardDescription, price: cardPrice },
    ]);
    request("http://localhost:3002/cart", "POST", JSON.stringify(newItem));
  };

  const openPopup = (target) => {
    let popup = document.querySelector(".pop-up"),
      popupTitle = document.querySelector(".popup-title"),
      inputTitle = document.querySelector(".input-title"),
      inputDescription = document.querySelector(".input-description"),
      inputPrice = document.querySelector(".input-price");

    if (target.classList.contains("edit-button")) {
      popup.classList.add("show");
      let card = target.parentElement.parentElement,
        cardTitle = card.querySelector(".card-title").textContent,
        cardDescription = card.querySelector(".card-description").textContent,
        cardPrice = card.querySelector(".card-price").textContent;
      let index = cardPrice.indexOf("$");

      popupTitle.textContent = "Edit card";
      inputTitle.dataset.title = cardTitle;
      inputDescription.dataset.description = cardDescription;
      inputPrice.dataset.price = cardPrice;
      setTitle(cardTitle);
      setDescription(cardDescription);
      cardPrice = +cardPrice.slice(0, index);
      setPrice(cardPrice);
    } else if (target.classList.contains("create-button")) {
      popup.classList.add("show");
      popupTitle.textContent = " Create a card of product";
      setTitle("");
      setDescription("");
      setPrice(1);
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

  const deleteCard = (target) => {
    const card = target.parentElement.parentElement;
    const id = card.dataset.id;
    request(`http://localhost:3002/products/${id}`, "DELETE");
    card.style.display = "none";
  };

  return (
    <>
      <CardSection>
        <CardInner>
          <CardHeader>
            <Sort onChange={(e) => SortProducts(e.target.value)}>
              <option value="A-Z">A to Z</option>
              <option value="Z-A">Z to A</option>
            </Sort>
            <Context.Provider
              value={{
                totalPrice,
                setTotalPrice,
                counter,
                setCounter,
                cart,
                setCart,
                products,
              }}
            >
              <CartLogic cart={cart} setCart={setCart} />
            </Context.Provider>
          </CardHeader>
          <CardLists>
            {products.map(({ title, description, price, id }) => {
              return (
                <Card key={id} data-id={id} className="card">
                  <ButtonSection
                    className="open-more"
                    onClick={(e) => openMore(e.target)}
                  >
                    <EditButton
                      className="edit-button"
                      onClick={(e) => openPopup(e.target)}
                    >
                      <IconEdit />
                      Edit
                    </EditButton>
                    <DeleteButton
                      className="delete-button"
                      onClick={(e) => deleteCard(e.target)}
                    >
                      <IconDelete />
                      Delete
                    </DeleteButton>
                  </ButtonSection>
                  <CardImg src={audi} alt="photo" />
                  <CardTitle className="card-title">{title}</CardTitle>
                  <CardDescription className="card-description">
                    {description}
                  </CardDescription>
                  <CardPrice className="card-price">{price + "$"}</CardPrice>
                  <AddButton onClick={(e) => addToCart(e.target)}>
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
        <CreateProducts
          className="create-button"
          onClick={(e) => openPopup(e.target)}
        >
          Create Products
        </CreateProducts>
      </CardSection>
      <Context.Provider
        value={{
          products,
          setProducts,
          title,
          setTitle,
          setDescription,
          description,
          price,
          setPrice,
        }}
      >
        <PopupSection />
      </Context.Provider>
    </>
  );
};

export default CardList;
