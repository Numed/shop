import { useRef, useState } from "react";
import sun from "../../img/Modes/sun.svg";
import moon from "../../img/Modes/moon.svg";
import {
  Header,
  HeaderTitle,
  ModeSection,
  Moon,
  Sun,
  Switch,
  SliderRound,
  CheckBox,
  SearchInput,
} from "./style";

const HeaderSection = () => {
  const [searchValue, setSearchValue] = useState("");

  const moonMode = useRef();
  const sunMode = useRef();

  const onSearch = (value) => {
    setSearchValue(value);
    const cardTitle = document.querySelectorAll(".card-title");
    let searchData = searchValue.trim().toLowerCase();
    if (searchData !== "") {
      cardTitle.forEach((e) => {
        if (e.textContent.toLowerCase().search(searchData) === -1) {
          e.parentElement.classList.add("hide");
        } else {
          e.parentElement.classList.remove("hide");
        }
      });
    } else {
      cardTitle.forEach((e) => {
        e.parentElement.classList.remove("hide");
      });
    }
  };

  const onDarkMode = () => {
    if (moonMode.current.classList.contains("active")) {
      moonMode.current.classList.remove("active");
      sunMode.current.classList.add("active");
      document.body.classList.remove("dark");
    } else {
      sunMode.current.classList.remove("active");
      moonMode.current.classList.add("active");
      document.body.classList.add("dark");
    }
  };

  return (
    <Header>
      <HeaderTitle className="header-title">Numed</HeaderTitle>
      <SearchInput
        className="search-input"
        value={searchValue}
        type="search"
        onInput={(e) => onSearch(e.target.value)}
        placeholder="what are you looking for?"
      />
      <ModeSection>
        <Sun className="sun" ref={sunMode} src={sun} alt="Sun Mode" />
        <Switch className="switch">
          <CheckBox type="checkbox" onChange={onDarkMode} />
          <SliderRound className="slider" />
        </Switch>
        <Moon className="moon" ref={moonMode} src={moon} alt="Moon Mode" />
      </ModeSection>
    </Header>
  );
};

export default HeaderSection;
