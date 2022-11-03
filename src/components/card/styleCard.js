import styled from "styled-components";

export const CardContent = styled.div`
  min-height: auto;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }

  h1 {
    position: absolute;
    color: white;
    font-size: 1.7rem;
    font-weight: bolder;
    bottom: 1rem;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translate(-50%, 0%);
    z-index: 4;
  }
`;

export const Gradient = styled.div`
  border-radius: 2rem;
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
`;
