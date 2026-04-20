import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";
import { queries, mutations } from "./resolvers/index.js";
import { typeDefs } from "./schema/typeDefs.js";

const PORT = 4000;

const schema = createSchema({
  typeDefs,
  resolvers: {
    ...queries,
    ...mutations,
  },
});

const yoga = createYoga({
  schema,
  graphiql: true,
});

const server = createServer(yoga);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});

export default server;
