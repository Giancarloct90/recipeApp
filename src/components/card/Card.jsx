import { CardContent, Gradient } from "./styleCard";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Card = ({ recipe, width }) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <CardContent>
        <Gradient />
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt="" />
      </CardContent>
    </Link>
  );
};

export default Card;
