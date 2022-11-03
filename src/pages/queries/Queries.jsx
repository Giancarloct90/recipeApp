import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/card/Card";
import { QueriesContent } from "./styleQueries";
import { motion } from "framer-motion";

const Cusine = () => {
  const params = useParams();
  const { data } = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&${params.type}`,
    params.type,
    false
  );

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {data.ok && (
        <QueriesContent>
          {data.data.results.map((recipe) => (
            <div key={recipe.id}>
              <Card recipe={recipe} />
            </div>
          ))}
        </QueriesContent>
      )}
    </motion.div>
  );
};

export default Cusine;
