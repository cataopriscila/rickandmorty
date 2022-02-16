import "./styles.css";
import chevrondown from "../../assets/images/chevron-down.png";
import { gql, useQuery } from "@apollo/client";
import { Locations } from "../../types";

const GET_LOCATIONS = gql`
  query getLocations {
    locations {
      results {
        id
        name
      }
    }
  }
`;

const Dropdown = (props: {
  onLocationSelected: (id: string) => void;
}): JSX.Element => {
  const { loading, error, data } = useQuery<Locations>(GET_LOCATIONS);

  if (loading)
    return (
      <select className="dropdown">
        <option label="All Locations" />
      </select>
    );
  if (error) return <h2 className="error-styled">No locations today</h2>;

  return (
    <>
      <select
        className="dropdown"
        onChange={(e) => props.onLocationSelected(e.target.value)}
      >
        <optgroup label="Choose a Location">
          <option label="All Locations" />
          <>
            {data &&
              data.locations.results.map((location) => (
                <option key={location.id} value={location.name}>
                  {location.name}
                </option>
              ))}
          </>
        </optgroup>
      </select>
      <img src={chevrondown} alt="dropdown" />
    </>
  );
};

export { Dropdown };
