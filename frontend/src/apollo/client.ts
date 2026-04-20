import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";


const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export {apolloClient};
