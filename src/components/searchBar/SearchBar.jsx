import { InputText, SearchBarContent, SearchIcon } from "./styleSearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();
  const SubmitTextSearch = (e) => {
    e.preventDefault();
    navigate(`/queries/query=${textInput}`);
  };

  return (
    <SearchBarContent onSubmit={SubmitTextSearch}>
      <SearchIcon />
      <InputText
        type="text"
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
    </SearchBarContent>
  );
};

export default SearchBar;
