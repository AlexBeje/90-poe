import { useEffect } from "react";
import { APIKEY } from "../../constants/keys";

import ReactRepo from "../components/ReactRepo";

import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

function ReactReposList() {
  function apiConnection() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      cache: new InMemoryCache(),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${APIKEY}`,
      },
    });

    client
      .query({
        query: gql`
          query GetRates {
            viewer {
              login
            }
          }
        `,
      })
      .then((result) => console.log(result));
  }

  useEffect(() => {
    apiConnection();
  }, []);

  return <ReactRepo />;
}

export default ReactReposList;
