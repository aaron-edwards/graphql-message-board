import { gql } from 'apollo-server';

export default gql`
  enum Category {
    LL
    HarryPotter
    Shakespeare
    Simpsons
    Yoda
  }
  type Quote {
    id: Int!
    text: String!
    submittedBy: User
    category: Category!
  }
  type User {
    id: Int!
    name: String!
  }

  type Query {
    quotes(category: Category): [Quote!]!
  }
  
  input CreateQuoteInput {
    text: String!
    category: Category!
    userId: Int!
  }
  type Mutation {
    createQuote(input: CreateQuoteInput): Quote!
  }
`;
