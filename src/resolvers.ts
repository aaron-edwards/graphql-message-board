import { DataSources } from './datasources';

export default {
  Query: {
    quotes: (_root: {}, { category }: { category?: string }, { dataSources }: { dataSources: DataSources }) => {
      if (category) {
        return dataSources.quote.getQuotesWithCategory(category);
      }
      return dataSources.quote.getQuotes();
    },
  },
};
