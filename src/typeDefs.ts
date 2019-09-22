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

  type User {
    id: Int!
    name: String
    username: String!
    email: String
  }
  type Query {
    quotes(category: Category): [QuotePost!]!
  }
  input QuoteInput {
    category: Category!
    text: String!
    username: String!
  }
  type Mutation {
    createQuote(input: QuoteInput): QuotePost!
  }
`;
