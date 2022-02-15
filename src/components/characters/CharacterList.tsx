import "./styles.css";
import { useQuery, gql } from "@apollo/client";
import { Characters, CharacterVars } from "../../types";
import Loader from "../loader/Loader";
import { Fragment } from "react";
import { CharacterItem } from "./CharacterItem";

const GET_CHARACTERS_BY_NAME = gql`
  query getCharactersByName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        status
        location {
          id
          name
        }
        image
      }
    }
  }
`;

interface Props {
  nameSearched: string;
  locationSelected: string;
  characterClicked: string[];
  moveCharacter: (character: string) => void;
  onLocationSelected: (location: string) => void;
}

function CharacterList(props: Props): JSX.Element {
  const { loading, error, data } = useQuery<Characters, CharacterVars>(
    GET_CHARACTERS_BY_NAME,
    { variables: { name: props.nameSearched } }
  );

  if (loading) return <Loader />;
  if (error) return <h2 className="error-styled">No character!</h2>;

  return (
    <>
      {data &&
        data.characters.results
          .filter((item) =>
            props.locationSelected
              ? item.location.name === props.locationSelected
              : item
          )
          .filter((item) =>
            props.characterClicked
              ? !props.characterClicked.some((el) => item.id === el)
              : item
          )
          .map((item) => {
            let color =
              item.status === "Alive"
                ? "#97CE4C"
                : item.status === "Dead"
                ? "#EF6363"
                : "#BABABA";

            return (
              <Fragment key={item.id}>
                <CharacterItem
                  id={item.id}
                  color={color}
                  src={item.image}
                  alt={item.name}
                  name={item.name}
                  status={item.status}
                  moveCharacter={props.moveCharacter}
                />
              </Fragment>
            );
          })}
    </>
  );
}

export { CharacterList };
