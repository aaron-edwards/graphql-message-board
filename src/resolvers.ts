import { IResolvers } from 'graphql-tools';
import { DataSources } from './data-sources';
import { Quote } from './data-sources/QuoteDataSource';

const resolvers: IResolvers = {
  Query: {
    quotes: (_root: {}, _args: {}, { dataSources: { quotes } }: { dataSources: DataSources }) => {
      return quotes.quotes();
    },
  },
  QuotePost: {
    submittedBy: (quote: Quote, _args, { dataSources: { users } }: { dataSources: DataSources }) => {
      return users.getUser(quote.userId);
    },
  },
};

export default resolvers;
