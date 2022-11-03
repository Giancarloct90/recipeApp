import { List, NavLinks } from "./styleCategories";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

const Categories = () => {
  return (
    <List>
      <NavLinks to={"/queries/cuisine=Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLinks>
      <NavLinks to={"/queries/cuisine=American"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLinks>
      <NavLinks to={"/queries/cuisine=Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLinks>
      <NavLinks to={"/queries/cuisine=Japaneses"}>
        <GiChopsticks />
        <h4>Japaneses</h4>
      </NavLinks>
    </List>
  );
};

export default Categories;
