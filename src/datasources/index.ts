import QuoteDataSource from './QuoteDataSource';
import UserDataSource from './UserDataSource';

export default () => ({
  quote: new QuoteDataSource(),
  user: new UserDataSource(),
});

export type DataSources = {
  quote: QuoteDataSource;
  user: UserDataSource;
};
