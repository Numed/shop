import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100%;
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h2`
  font-size: 36px;
  letter-spacing: 1.2px;
  font-weight: 600;
  color: #2f2f2f;
`;

export const SearchInput = styled.input`
  width: 220px;
  border-bottom: 1px solid #2f2f2f !important;
  font-size: 14px;
  padding-bottom: 3px;
  letter-spacing: 1.2px;
  font-weight: 400;
  text-align: center;
`;

export const ModeSection = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const CheckBox = styled.input`
  &:checked + .slider {
    background-color: #bebeb4;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #bebeb4;
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const SliderRound = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #c81e45;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Sun = styled.img`
  width: 32px;
`;

export const Moon = styled.img`
  width: 32px;
`;
