import useFetch from "../../hooks/useFetch";
import { PopularContent, TitleGroup } from "./stylePopularContent,";
import Card from "../card/Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ErrorMessage from "../erroMessage/ErrorMessage";
import Loading from "../loading/Loading";

const GroupRecipies = ({ url, group, flag, title, perPage, arrowFlag }) => {
  const { data, loading } = useFetch(url, group, flag);

  return (
    <PopularContent>
      <TitleGroup>{title}</TitleGroup>
      {!loading && <Loading />}
      {/* <Loading /> */}
      {data && (
        <Splide
          options={{
            perPage: perPage,
            // perMove: 2,
            arrows: arrowFlag ? true : false,
            pagination: false,
            drag: "free",
            // type: "loop",
            // rewind: true,
            gap: "2rem",
            breakpoints: {
              480: {
                perPage: 2,
                perMove: 2,
              },
              // 935: {
              //   perPage: 3,
              //   perMove: 3,
              // },
              // 1247: {
              //   perPage: 4,
              //   perMove: 4,
              // },
            },
          }}
        >
          {data.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card recipe={recipe} />
            </SplideSlide>
          ))}
        </Splide>
      )}
      {data.ok1 === false && (
        <ErrorMessage
          message={
            "Revisa tu conexión a internet o ha superado el límete de consultas al servidor"
          }
        />
      )}
    </PopularContent>
  );
};

export default GroupRecipies;
