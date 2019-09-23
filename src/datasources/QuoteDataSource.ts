import { DataSource } from 'apollo-datasource';

const quote = {
  id: 1,
  text: 'Some Text',
  userId: 1,
  category: 'LL',
};

export default class QuoteDataSource extends DataSource {
  getQuotes() {
    return [quote];
  }
}
