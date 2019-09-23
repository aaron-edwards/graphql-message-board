import { DataSource } from 'apollo-datasource';
import quotes from './quotes.json';

const wait = (seconds: number) =>
  new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });

export default class QuoteDataSource extends DataSource {
  async getQuotes() {
    await wait(3);
    return quotes;
  }
}
