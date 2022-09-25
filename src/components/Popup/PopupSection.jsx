import {
  PopUp,
  PopUpInner,
  PopUpForm,
  InputSection,
  LabelInput,
  InputText,
  SaveButton,
  PopUpTitle,
  ButtonClose,
} from "./style";
import { useHttp } from "../../hooks/http.hooks";
import { Context } from "../Context/Context";

import { useState, useRef, useContext } from "react";

const PopupSection = () => {
  const { request } = useHttp();
  const popupRef = useRef();
  const {
    products,
    setProducts,
    title,
    setTitle,
    setDescription,
    description,
    price,
    setPrice,
  } = useContext(Context);

  const [id, setId] = useState(18);

  const closePopup = (e) => {
    if (e.target.classList.contains("button-close__popup")) {
      e.preventDefault();
      popupRef.current.classList.remove("show");
    } else if (e.target.classList.contains("pop-up__inner")) {
      popupRef.current.classList.remove("show");
    }
  };

  const onSave = () => {
    const popupTitle = document
      .querySelector(".popup-title")
      .textContent.trim();
    const inputTitle = document.querySelector(".input-title");

    const findTitle = title;
    if (popupTitle === "Create a card of product") {
      let newCard = {
        id,
        title,
        description,
        price: +price,
      };
      setId((id) => id + 1);
      request(
        "http://localhost:3002/products",
        "POST",
        JSON.stringify(newCard)
      ).then(closeAndUpdate);
    } else {
      const card = products.filter(
        (product) => product.title === inputTitle.dataset.title
      );
      console.log(card, findTitle);
      const id = card[0].id;
      let updateCard = {
        id,
        title,
        description,
        price: +price,
      };
      request(
        `http://localhost:3002/products/${id}`,
        "PUT",
        JSON.stringify(updateCard)
      ).then(popupRef.current.classList.remove("show"));
    }
  };

  const closeAndUpdate = (item) => {
    popupRef.current.classList.remove("show");
    setProducts([...products, item]);
  };

  return (
    <PopUp ref={popupRef} className="pop-up" onClick={(e) => closePopup(e)}>
      <PopUpInner className="pop-up__inner">
        <PopUpForm>
          <ButtonClose
            className="button-close__popup"
            onClick={(e) => closePopup(e)}
          />
          <PopUpTitle className="popup-title">
            {"Create a card of product"}
          </PopUpTitle>
          <InputSection>
            <LabelInput htmlfor="title">Enter Title: </LabelInput>
            <InputText
              data-title
              className="input-title"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            ></InputText>
          </InputSection>
          <InputSection>
            <LabelInput htmlfor="description">Enter description: </LabelInput>
            <InputText
              data-description
              className="input-description"
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></InputText>
          </InputSection>
          <InputSection>
            <LabelInput htmlfor="price">Enter price: </LabelInput>
            <InputText
              data-price
              className="input-price"
              type="number"
              id="price"
              min={1}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            ></InputText>
          </InputSection>
          <SaveButton onClick={onSave}>Save</SaveButton>
        </PopUpForm>
      </PopUpInner>
    </PopUp>
  );
};

export default PopupSection;
