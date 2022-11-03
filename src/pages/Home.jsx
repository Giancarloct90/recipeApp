import GroupRecipies from "../components/groupRecipies/GroupRecipies";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <GroupRecipies
        url={`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`}
        group={"popular"}
        flag={true}
        title={"Populars"}
        perPage={3}
      />
      <GroupRecipies
        url={`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`}
        group={"vegeterian"}
        flag={true}
        title={"Vegetarian"}
        perPage={4}
      />
      {/* <GroupRecipies
        url={`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=dessert`}
        group={"diet"}
        flag={true}
        title={"Diets"}
        perPage={3}
      /> */}
      {/* <button disabled={false}>click med</button> */}
    </motion.div>
  );
};

export default Home;
