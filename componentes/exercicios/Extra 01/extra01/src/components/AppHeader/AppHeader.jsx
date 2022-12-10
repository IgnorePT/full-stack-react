import burgerMenu from "./../../assets/icons/burger_menu.png";
import dotMenu from "./../../assets/icons/dot_menu.png";

const AppHeader = () => {
  return (
    <header>
      <img id="burger_menu" src={burgerMenu} alt="burger menu" />
      <span className="location">Porto</span>
      <img src={dotMenu} alt="dot menu"/>
    </header>
  );
};

export default AppHeader;
