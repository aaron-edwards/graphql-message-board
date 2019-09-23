import { ApolloServer, AuthenticationError } from 'apollo-server';
import typeDefs from './type-defs';
import resolvers from './resolvers';
import dataSources from './datasources';

const port = process.env.PORT || 4000;

const context = ({ req, connection }: { req: any, connection: any }) => {
  if (connection) {
    return {};
  } else {
    const token = req.headers.authorization;

    if (token !== "Token") {
      throw new AuthenticationError("Invalid Token Found");
    }

    return { token };
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  introspection: true,
  playground: true,
});

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
