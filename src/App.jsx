import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import { GlobalStyled, PagesContainer } from "./styleGlobal";
import Categories from "./components/categories/Categories";
import SearchBar from "./components/searchBar/SearchBar";
import Logo from "./components/logo/Logo";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Logo />
      <SearchBar />
      <Categories />
      <PagesContainer>
        <Pages />
      </PagesContainer>
    </BrowserRouter>
  );
};

export default App;
