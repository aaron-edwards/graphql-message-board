import QuoteDataSource from './QuoteDataSource';

export default () => ({
  quote: new QuoteDataSource(),
});

export type DataSources = {
  quote: QuoteDataSource;
};
