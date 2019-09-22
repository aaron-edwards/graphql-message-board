import { IResolvers } from 'graphql-tools';
import { DataSources } from './data-sources';
import { Post } from './data-sources/PostDataSource';

const resolvers: IResolvers = {
  Query: {
    posts: (_root: {}, _args: {}, { dataSources: { posts } }: { dataSources: DataSources }) => {
      return posts.posts();
    },
    post: (_root: {}, { id }: { id: number }, { dataSources: { posts } }: { dataSources: DataSources }) => {
      return posts.post(id);
    },
  },
  Post: {
    user: (post: Post, _args, { dataSources: { users } }: { dataSources: DataSources }) => {
      return users.getUser(post.userId);
    },
  },
};

export default resolvers;
