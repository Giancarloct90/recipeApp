import useFetch from "../../hooks/useFetch";
import { PopularContent, TitleGroup } from "./stylePopularContent,";
import Card from "../card/Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const GroupRecipies = ({ url, group, flag, title, perPage }) => {
  const { data } = useFetch(url, group, flag);

  return (
    <PopularContent>
      <TitleGroup>{title}</TitleGroup>
      {data && (
        <Splide
          options={{
            perPage: perPage,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {data.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card recipe={recipe} />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </PopularContent>
  );
};

export default GroupRecipies;
