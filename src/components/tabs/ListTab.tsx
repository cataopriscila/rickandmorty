import "./styles.css";

interface Props {
  isActive: string;
  openedTab: (tab: string) => void;
}

const ListTab = (props: Props) => {
  let color =
    props.isActive === "list"
      ? "rgba(151, 206, 76, 1)"
      : "rgba(255, 255, 255, 0.75)";

  return (
    <>
      <div
        className="listTab"
        style={{ color: color }}
        onClick={() => props.openedTab("list")}
      >
        <h2 className="tabTitle">List</h2>
      </div>
      {props.isActive === "list" ? <div className="listTabDivisor" /> : <div />}
    </>
  );
};

export { ListTab };
