import { motion } from "framer-motion";
import { GroupMobile } from "./styleHome";
import GroupRecipies from "../../components/groupRecipies/GroupRecipies";
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

      <GroupMobile>
        <GroupRecipies
          url={`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=dessert`}
          group={"diet"}
          flag={true}
          arrowFlag={true}
          title={"Diets"}
          perPage={2}
        />
      </GroupMobile>
      <GroupMobile>
        <GroupRecipies
          url={`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegan`}
          group={"vegan"}
          flag={true}
          arrowFlag={true}
          title={"Vegan"}
          perPage={2}
        />
      </GroupMobile>
    </motion.div>
  );
};

export default Home;
