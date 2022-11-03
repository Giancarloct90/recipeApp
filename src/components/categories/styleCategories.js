import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 2rem;
  width: 100%;
  margin: auto;
  /* background: blue; */
  justify-content: center;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: white;
  background: #494949;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  margin: 2rem;
  padding: 2rem;

  svg {
    color: white;
    font-size: 2rem;
  }

  transition: all ease-in 0.5s;

  &.active {
    background-color: orange;
    h4 {
      color: white;
    }
    svg {
      color: white;
      font-size: 1.5rem;
    }
  }
`;
