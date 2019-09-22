import { gql } from 'apollo-server';

export default gql`
  enum Category {
    HarryPotter
    Shakespeare
    Simpsons
    Yoda
    Lunch
  }
  type QuotePost {
    id: Int!
    text: String!
    category: Category!
    timestamp: String!
    submittedBy: User
    userId: Int!
  }
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
    quotes: [QuotePost!]!
    posts: [Post!]!
    post(id: Int!): Post
  }
`;
