import { PubSub } from 'apollo-server';

import { DataSources } from './datasources';

const QUOTE_ADDED = 'QUOTE_ADDED';

const pubsub = new PubSub();

export default {
  Query: {
    quotes: (_root: {}, { category }: { category?: string }, { dataSources }: { dataSources: DataSources }) => {
      if (category) {
        return dataSources.quote.getQuotesWithCategory(category);
      }
      return dataSources.quote.getQuotes();
    },
  },
  Quote: {
    submittedBy: (quote: { userId: number }, _args: {}, { dataSources }: { dataSources: DataSources }) => {
      return dataSources.user.getUser(quote.userId);
    },
  },
  Mutation: {
    createQuote: (
      _root: {},
      { input }: { input: { text: string; category: string; userId: number } },
      { dataSources }: { dataSources: DataSources },
    ) => {
      const newQuote = dataSources.quote.create(input.text, input.category, input.userId);
      pubsub.publish(QUOTE_ADDED, { quoteAdded: newQuote });
      return newQuote;
    },
  },
  Subscription: {
    quoteAdded: {
      subscribe: () => pubsub.asyncIterator([QUOTE_ADDED]),
    },
  },
};
