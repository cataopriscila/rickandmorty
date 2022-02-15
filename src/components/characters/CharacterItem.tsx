import "./styles.css";

interface Props {
  id: string;
  color?: string;
  src: string;
  alt: string;
  name: string;
  status: string;
  moveCharacter: (name: string) => void;
}

const CharacterItem = (props: Props) => {
  return (
    <>
      <div
        className="character-box"
        onClick={() => props.moveCharacter(props.id)}
      >
        <div className="image-box">
          <img
            style={{ borderColor: `${props.color}` }}
            className="image"
            src={props.src}
            alt={props.name}
          />
        </div>
        <h2>{props.name}</h2>
        <p style={{ color: `${props.color}` }}>{props.status}</p>
      </div>
    </>
  );
};

export { CharacterItem };
