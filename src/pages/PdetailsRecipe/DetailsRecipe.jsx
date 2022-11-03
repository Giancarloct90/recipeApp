import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import {
  TitleDetails,
  DeatilsContent,
  InfoIngredients,
  H3text,
  ListIngredients,
  DivButton,
  TitleImage,
} from "./styleDetailsRecipe";
import { motion } from "framer-motion";

const DetailsRecipe = () => {
  const parmas = useParams();
  const [activeBtn, setActiveBtn] = useState("Information");
  const { data } = useFetch(
    `https://api.spoonacular.com/recipes/${parmas.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
    parmas.id,
    false
  );
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {data && data.data && data.data.title && (
        <DeatilsContent>
          <TitleImage>
            <TitleDetails>{data.data.title}</TitleDetails>
            <img src={data.data.image} alt="" />
          </TitleImage>
          <InfoIngredients>
            <DivButton>
              <button
                className={activeBtn === "Information" ? "activeBtn" : ""}
                onClick={() => setActiveBtn("Information")}
              >
                Informations
              </button>
              <button
                className={activeBtn === "Ingredients" ? "activeBtn" : ""}
                onClick={() => setActiveBtn("Ingredients")}
              >
                Ingredients
              </button>
            </DivButton>

            {activeBtn === "Information" && (
              <div>
                <H3text
                  dangerouslySetInnerHTML={{ __html: data.data.summary }}
                ></H3text>
                <H3text
                  dangerouslySetInnerHTML={{ __html: data.data.instructions }}
                ></H3text>
              </div>
            )}
            {activeBtn === "Ingredients" && (
              <ul>
                {data.data.extendedIngredients.map((ingredients) => (
                  <ListIngredients key={ingredients.id}>
                    {ingredients.original}
                  </ListIngredients>
                ))}
              </ul>
            )}
          </InfoIngredients>
        </DeatilsContent>
      )}
    </motion.div>
  );
};

export default DetailsRecipe;
