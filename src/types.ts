/* Use this file to add any types needed to make your queries type safe */
export interface CharacterInfo {
  id: string;
  name: string;
  status: string;
  location: {
    id: string;
    name: string;
  };
  image: string;
}

export interface CharacterData {
  results: CharacterInfo[];
  charactersByIds: CharacterInfo[];
  
}

export interface Characters {
  characters: CharacterData;
}

export interface CharacterVars {
  name: string;  
}


export interface LocationInfo {
  id: string;
  name: string;
  residents: CharacterInfo[];
}

export interface LocationData {
  results: LocationInfo[];
}

export interface Locations {
  locations: LocationData;
}
