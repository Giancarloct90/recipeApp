import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoContainer = styled(Link)`
  margin-top: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: black;

  svg {
    font-size: 4.5rem;
    font-weight: bolder;
  }
  h4 {
    font-size: 1.7rem;
  }
`;

export const LogoContent = styled.div`
  border-radius: 50%;
  width: 10rem;
  padding: 1rem 1rem;
  background-color: #fbf3ff;
`;
