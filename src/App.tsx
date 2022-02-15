import "./App.css";
import { useState } from "react";
import Title from "./components/title/Title";
import { SearchInput, Dropdown } from "./components/searchfield/index";
import {
  CharacterContainer,
  CharacterFavorites,
  CharacterList,
} from "./components/characters/index";
import { FavoriteTab, ListTab } from "./components/tabs/index";

export default function App() {
  const [nameSearched, setNameSearched] = useState<string>("");
  const [isActive, setIsActive] = useState<string>("list");
  const [characterClicked, setCharacterClicked] = useState<string[]>([]);
  const [locationSelected, setLocationSelected] = useState("");

  const searchByName = (name: string) => {
    setNameSearched(name);
  };

  const openedTab = (tab: string) => {
    setIsActive(tab);
  };

  const moveCharacter = (character: string) => {
    setCharacterClicked((s) => s.concat(character));
  };

  const onLocationSelected = (location: string) => {
    setLocationSelected(location);
  };

  return (
    <div className="App">
      <Title />
      <SearchInput searchByName={searchByName} />
      <Dropdown onLocationSelected={onLocationSelected} />
      <ListTab isActive={isActive} openedTab={openedTab} />
      <FavoriteTab isActive={isActive} openedTab={openedTab} />
      <CharacterContainer>
        {isActive === "list" ? (
          <CharacterList
            nameSearched={nameSearched}
            locationSelected={locationSelected}
            characterClicked={characterClicked}
            moveCharacter={moveCharacter}
            onLocationSelected={onLocationSelected}
          />
        ) : (
          <CharacterFavorites
            characterClicked={characterClicked}
            moveCharacter={moveCharacter}
          />
        )}
      </CharacterContainer>
    </div>
  );
}
