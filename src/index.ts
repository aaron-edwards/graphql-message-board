import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Quote {
    text: String!
  }

  type Query {
    quotes: [Quote!]!
  }
`;

const resolvers = {
  Query: {
    quotes: () => [],
  },
};

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
