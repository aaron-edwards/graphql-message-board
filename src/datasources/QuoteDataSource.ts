import { DataSource } from 'apollo-datasource';
import quotes from './quotes.json';

export default class QuoteDataSource extends DataSource {
  getQuotes() {
    return quotes;
  }
}
