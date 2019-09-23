import { gql } from 'apollo-server';

export default gql`
  type Quote {
    text: String!
  }

  type Query {
    quotes: [Quote!]!
  }
`;
