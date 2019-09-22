import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int!
    name: String
    username: String!
    email: String
  }
  type Query {
    users: [User!]!
    user(id: Int!): User
  }
`;
