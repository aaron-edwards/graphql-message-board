import { IResolvers } from 'graphql-tools';
import { DataSources } from './data-sources';

const resolvers: IResolvers = {
  Query: {
    users: (_root: {}, _args: {}, { dataSources }: { dataSources: DataSources }) => {
      return dataSources.users.getUsers();
    },
    user: (_root: {}, { id }: { id: number }, { dataSources }: { dataSources: DataSources }) => {
      return dataSources.users.getUser(id);
    },
  },
};

export default resolvers;
