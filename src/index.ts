import { ApolloServer } from 'apollo-server';
import typeDefs from './type-defs';
import resolvers from './resolvers';

const port = process.env.PORT || 4000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
