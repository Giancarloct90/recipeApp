import { FaLinux } from "react-icons/fa";
import { LogoContainer, LogoContent } from "./styleLogo";

const Logo = () => {
  return (
    <LogoContainer to={"/"}>
      <LogoContent>
        <FaLinux />
        <h4>Home</h4>
      </LogoContent>
    </LogoContainer>
  );
};

export default Logo;
