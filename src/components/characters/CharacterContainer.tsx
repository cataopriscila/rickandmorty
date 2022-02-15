import "./styles.css";

interface Props {
  children: JSX.Element;
}

const CharacterContainer = (props: Props) => {
  return (
    <div className="container">
      <div className="container-characters">{props.children}</div>
    </div>
  );
};

export { CharacterContainer };
