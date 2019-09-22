import { IResolvers } from 'graphql-tools';
import { PubSub } from 'apollo-server';
import { DataSources } from './data-sources';
import { Quote, QuoteCategory } from './data-sources/QuoteDataSource';

const pubsub = new PubSub();

const QUOTES = 'QUOTES';

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
  Mutation: {
    createQuote: (
      _root: {},
      { input: { text, username, category } }: { input: { category: QuoteCategory; text: string; username: string } },
      { dataSources: { quotes, users } }: { dataSources: DataSources },
    ) => {
      const user = users.getByUserName(username) || users.createUser(username);
      const newQuote = quotes.create(text, category, user.id);
      pubsub.publish(QUOTES, { quoteAdded: newQuote });
      return newQuote;
    },
  },
  QuotePost: {
    submittedBy: (quote: Quote, _args, { dataSources }: { dataSources: DataSources }) => {
      return dataSources.users.getUser(quote.userId);
    },
  },

  Subscription: {
    quoteAdded: {
      subscribe: () => pubsub.asyncIterator([QUOTES]),
    },
  },
};

export default resolvers;
