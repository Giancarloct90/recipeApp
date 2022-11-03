import styled from "styled-components";

export const TitleDetails = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 2rem;
`;

export const DeatilsContent = styled.div`
  margin: 2rem 0rem;
  display: flex;
  gap: 3rem;
  @media only screen and (max-width: 480px) {
    /* background-color: blue; */
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
  }
`;

export const TitleImage = styled.div`
  img {
    border-radius: 2rem;
    width: 45rem;
  }
  @media only screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const InfoIngredients = styled.div`
  width: 80%;
  button {
    background-color: white;
    color: black;
    border: 0.3rem black solid;
    margin: 0rem 5rem;
    width: 15rem;
    height: 4rem;
    font-size: 1.8rem;
    font-weight: bolder;
    cursor: pointer;
    transition: all ease-in 0.4s;
  }

  .activeBtn {
    background-color: black;
    color: white;
    /* border: 0.3rem black solid; */
  }
`;

export const H3text = styled.h3`
  margin: 1.7rem 1.7rem;
  font-size: 1.7rem;
`;

export const ListIngredients = styled.li`
  font-size: 1.7rem;
  margin: 1.7rem 1.7rem;
  font-weight: bolder;
`;

export const DivButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: pink; */
`;
