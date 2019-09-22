import UserDataSource from './UserDataSource';
import PostDataSource from './PostDataSource';

const dataSources = () => ({
  users: new UserDataSource(),
  posts: new PostDataSource(),
});

export type DataSources = {
  users: UserDataSource;
  posts: PostDataSource;
};

export default dataSources;
