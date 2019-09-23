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
    userId: Int!
    category: Category!
  }

  type Query {
    quotes: [Quote!]!
  }
`;
