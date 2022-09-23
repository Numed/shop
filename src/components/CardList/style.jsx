import styled from "styled-components";
import iconCart from "../../img/icons/shopping-cart.png";
import arrow from "../../img/icons/left-arrow.png";
import more from "../../img/icons/more.png";
import edit from "../../img/icons/edit.png";
import deleteIcon from "../../img/icons/delete.png";

export const CardSection = styled.section`
  margin-top: 40px;
  width: 100%;
  height: 100%;
`;

export const CardInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Sort = styled.select`
  background-color: #c81e45;
  color: #fff;
  font-size: 14px;
  padding: 4px 20px;
`;

export const Cart = styled.div`
  width: 32px;
  height: 32px;
  background: url(${iconCart}) no-repeat center;
`;

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonBack = styled.button`
  width: 32px;
  height: 32px;
  background: url(${arrow}) no-repeat center;
`;

export const CartTitle = styled.h2`
  font-size: 22px;
  letter-spacing: 1.1px;
  line-height: 38px;
  font-weight: 600;
  color: #2f2f2f;
`;

export const CartInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardLists = styled.div`
  margin-top: 20px;
  width: 75%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 400px;
  background-color: #78866b;

  &:hover {
    transition: all 0.15s linear;
    box-shadow: -1px -2px 18px 1px rgba(0, 0, 0, 0.75);
  }
`;

export const ButtonSection = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 20px;
  right: 20px;
  background: url(${more}) no-repeat center;
`;

export const IconEdit = styled.button`
  width: 32px;
  height: 32px;
  background: url(${edit}) no-repeat center;
  outline: none;
`;

export const IconDelete = styled.button`
  width: 32px;
  height: 32px;
  background: url(${deleteIcon}) no-repeat center;
  outline: none;
`;

export const IconCart = styled.img`
  width: 32px;
  height: 32px;
  background: url(${iconCart}) no-repeat center;
  outline: none;
`;

export const EditButton = styled.button`
  width: 100%;
  height: 40px;
  background: #bebeb4;
`;

export const DeleteButton = styled.button`
  width: 100%;
  height: 40px;
  background: #bebeb4;
`;

export const AddButton = styled.button`
  width: 100%;
  height: 40px;
  background: #c81e45;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;

export const CardImg = styled.img`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 1.1px;
  line-height: 48px;
  color: #fff;
`;

export const CardPrice = styled.span`
  color: #c81e45;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 1.1px;
  line-height: 32px;
`;
