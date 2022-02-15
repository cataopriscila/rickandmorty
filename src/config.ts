import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://rickandmortyapi.com/graphql"
});


//Testing the new Apollo Client

// client
//   .query({
//     query: gql`
//       query GetAllCharacters {
//     characters {
//       results {
//         id
//         name
//         status
//         location {
//           name
//         }
//         image
//       }
//     }
//   }
// `})
//   .then(result => console.log(result));