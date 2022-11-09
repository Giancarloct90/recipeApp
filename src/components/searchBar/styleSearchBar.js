import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export const InputText = styled.input`
  width: 100%;
  height: 4rem;
  border-radius: 0.8rem;
  /* border: 0.7rem solid white; */
  background: linear-gradient(35deg, #494949, #313131);
  padding: 0.5rem 5.5rem;
  color: white;
  font-weight: bolder;
  font-size: 2rem;
  /* outline: none; */
  &:focus {
    /* border: 0.7rem solid pink; */
    /* box-shadow: 0px 0px 2px red; */
    /* border: 1px solid red; */
  }
`;

export const SearchBarContent = styled.form`
  width: 32%;
  margin: auto;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  @media only screen and (max-width: 480px) {
    width: 50%;
  }
`;

export const SearchIcon = styled(BiSearchAlt)`
  position: absolute;
  top: 0.8rem;
  left: 1.7rem;
  color: white;
  font-size: 2.4rem;
`;

export const CloseBtn = styled(AiOutlineClose)`
  position: absolute;
  top: 0.8rem;
  right: 1.7rem;
  color: white;
  font-size: 2.4rem;
  cursor: pointer;
`;
