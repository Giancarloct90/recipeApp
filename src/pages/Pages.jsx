import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import DetailsRecipe from "./PdetailsRecipe/DetailsRecipe";
import Queries from "./queries/Queries";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipe/:id" element={<DetailsRecipe />}></Route>
        <Route path={"/queries/:type"} element={<Queries />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
