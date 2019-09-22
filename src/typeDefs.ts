import { gql } from 'apollo-server';

export default gql`
  type Post {
    id: Int!
    title: String!
    timestamp: String!
    user: User
    userId: Int!
  }

  type User {
    id: Int!
    name: String
    username: String!
    email: String
  }
  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }
`;
