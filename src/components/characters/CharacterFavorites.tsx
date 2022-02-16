import "./styles.css";
import { gql, useQuery } from "@apollo/client";
import { CharacterData } from "../../types";
import Loader from "../../components/loader/Loader";
import { Fragment } from "react";
import { CharacterItem } from "./CharacterItem";

const GET_FAVORITES = gql`
  query getCharactersByIDs($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
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
`;

interface Props {
  characterClicked: string[];
  moveCharacter: (name: string) => void;
}

function CharacterFavorites(props: Props): JSX.Element {
  const { loading, error, data } = useQuery<CharacterData>(GET_FAVORITES, {
    variables: { ids: props.characterClicked },
  });
 
  if (loading) return <Loader />;
  if (error) return <p className="error-styled">No favorites selected</p>;

  return (
    <>
      {data &&
        data.charactersByIds.map((item) => {
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

export { CharacterFavorites };
