import { HeaderContainer } from "./styles";
import LogoIgnite from "../../assets/LogoIgnite.svg";
import { Timer, Scroll } from "phosphor-react";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  );
};
