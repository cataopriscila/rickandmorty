import { useState } from "react";
import "./styles.css";

interface Props {
  searchByName: (name: string) => void;
}

const SearchInput = (props: Props) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (inputValue: string) => {
    setInput(inputValue);
    props.searchByName(input);
  };

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Character name..."
      onChange={(e) => handleInputChange(e.target.value)}
    />
  );
};

export { SearchInput };
