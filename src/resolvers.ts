import { DataSources } from './datasources';

export default {
  Query: {
    quotes: (_root: {}, _args: {}, { dataSources }: { dataSources: DataSources }) => {
      return dataSources.quote.getQuotes();
    },
  },
};
