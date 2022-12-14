import styled from "styled-components";
import more from "../../img/icons/more.png";
import edit from "../../img/icons/edit.png";
import deleteIcon from "../../img/icons/delete.png";

export const CardSection = styled.section`
  margin-top: 40px;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  position: relative;
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
  position: relative;
`;

export const Sort = styled.select`
  background-color: #c81e45;
  color: #fff;
  font-size: 14px;
  padding: 4px 20px;
`;

export const CardLists = styled.div`
  margin-top: 20px;
  width: 75%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    transition: all 0.15s linear;
    box-shadow: -1px -2px 18px 1px rgba(0, 0, 0, 0.25);
  }

  &.hide {
    display: none;
  }
`;

export const ButtonSection = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  transform: scale(0.7);
  background: url(${more}) no-repeat center;
  cursor: pointer;

  &.active {
    top: -30px;
    right: 20px;
  }

  &.active > .delete-button,
  &.active > .edit-button {
    box-shadow: 1px 1px 5px #2f2f2f;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    z-index: 3;
  }
`;

export const IconEdit = styled.img`
  width: 32px;
  height: 32px;
  background: url(${edit}) no-repeat center;
  outline: none;
  transform: scale(0.7);
  pointer-events: none;
`;

export const IconDelete = styled.img`
  width: 32px;
  height: 32px;
  background: url(${deleteIcon}) no-repeat center;
  outline: none;
  transform: scale(0.7);
  pointer-eventnones
`;

export const EditButton = styled.button`
  display: none;
  width: 100%;
  height: 40px;
  background: #bebeb4;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  display: none;
  width: 100%;
  height: 40px;
  background: #bebeb4;
  cursor: pointer;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background: #c81e45;
  font-size: 16px;
  letter-spacing: 1.2px;
  font-weight: 600;
  color: #bebeb4;
  cursor: pointer;

  &:hover {
    transition: all 0.25s linear;
    color: #fff;
  }
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
  color: #2f2f2f;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.1px;
  line-height: 32px;
  text-align: center;
  color: #2f2f2f;
`;

export const CardPrice = styled.span`
  color: #c81e45;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 1.1px;
  line-height: 32px;
  pointer-events: none;
  margin-bottom: 10px;
`;

export const LoadMore = styled.button`
  color: #c81e45;
  font-size: 18px;
  letter-spacing: 1.1px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;

  &.end {
    color: rgba(200, 30, 69, 0.4);
    cursor: auto;
  }
`;

export const CreateProducts = styled.button`
  position: sticky;
  bottom: 0%;
  left: 87%;
  color: #bebeb4;
  font-size: 18px;
  letter-spacing: 1.1px;
  font-weight: 600;
  cursor: pointer;
  background-color: #c81e45;
  padding: 4px 20px;

  &:hover {
    color: #fff;
    transition: all 0.25s linear;
  }
`;
