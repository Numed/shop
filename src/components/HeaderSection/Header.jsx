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
        onInput={(e) => setSearchValue(e.target.value)}
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
