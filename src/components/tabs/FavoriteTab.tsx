import "./styles.css";

interface Props {
  isActive: string;
  openedTab: (tab: string) => void;
}

const FavoriteTab = (props: Props) => {
  let color =
    props.isActive === "list"
      ? "rgba(255, 255, 255, 0.75)"
      : "rgba(151, 206, 76, 1)";

  return (
    <>
      <div
        className="favoriteTab"
        style={{ color: color }}
        onClick={() => props.openedTab("fav")}
      >
        <h2 className="tabTitle">Favorites</h2>
      </div>
      {props.isActive === "list" ? (
        <div />
      ) : (
        <div className="favoriteTabDivisor" />
      )}
    </>
  );
};

export { FavoriteTab };
