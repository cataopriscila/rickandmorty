import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);