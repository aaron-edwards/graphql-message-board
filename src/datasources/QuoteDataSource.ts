import { DataSource } from 'apollo-datasource';
import quotes from './quotes.json';

const wait = (seconds: number) =>
  new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });

export default class QuoteDataSource extends DataSource {
  async getQuotes() {
    await wait(1);
    return quotes;
  }

  create(text: string, category: string, userId: number) {
    const newQuote = { id: quotes.length, text, category, userId };
    quotes.unshift(newQuote);
    return newQuote;
  }

  async getQuotesWithCategory(category: string) {
    await wait(1);
    return quotes.filter(quote => category === quote.category);
  }
}
