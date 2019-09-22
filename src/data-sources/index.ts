import UserDataSource from './UserDataSource';
import QuoteDataSource from './QuoteDataSource';

const dataSources = () => ({
  users: new UserDataSource(),
  quotes: new QuoteDataSource(),
});

export type DataSources = {
  users: UserDataSource;
  quotes: QuoteDataSource;
};

export default dataSources;
