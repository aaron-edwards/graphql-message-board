import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    name: String!
  }

  type Query {
    users: [User!]!
  }
`;
const users = [
  { name: 'Ms. Madelyn Bailey' },
  { name: 'Cyrus Keeling PhD' },
  { name: "Fern O'Kon" },
  { name: 'Ezekiel Corkery' },
  { name: 'Ofelia Nicolas' },
  { name: 'Jaida Mante Sr.' },
  { name: 'Aracely Yost' },
  { name: 'Dr. Orrin Wolf' },
  { name: 'Robbie Bartoletti' },
  { name: 'Rupert Terry' },
];

const resolvers = {
  Query: {
    users: () => users,
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
