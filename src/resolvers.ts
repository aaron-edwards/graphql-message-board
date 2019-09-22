import { IResolvers } from 'graphql-tools';
import { DataSources } from './data-sources';
import { Quote, QuoteCategory } from './data-sources/QuoteDataSource';

const resolvers: IResolvers = {
  Query: {
    quotes: (
      _root: {},
      { category }: { category: QuoteCategory },
      { dataSources: { quotes } }: { dataSources: DataSources },
    ) => {
      return category ? quotes.quotesByCategory(category) : quotes.allQuotes();
    },
  },
  QuotePost: {
    submittedBy: (quote: Quote, _args, { dataSources: { users } }: { dataSources: DataSources }) => {
      return users.getUser(quote.userId);
    },
  },
};

export default resolvers;
