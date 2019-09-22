import UserDataSource from './UserDataSource';

const dataSources = () => ({
  users: new UserDataSource(),
});

export type DataSources = {
  users: UserDataSource;
};

export default dataSources;
