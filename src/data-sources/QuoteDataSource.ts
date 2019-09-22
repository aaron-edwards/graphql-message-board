import { DataSource } from 'apollo-datasource';
import quoteData from './quotes.json';

export type QuoteCategory = 'HarryPotter' | 'Shakespeare' | 'Simpsons' | 'Yoda' | 'Lunch';

export type Quote = {
  id: number;
  text: string;
  userId: number;
  category: QuoteCategory;
  timestamp: string;
};

export default class QuoteDataSource extends DataSource {
  private quoteData: Quote[];

  constructor() {
    super();
    this.quoteData = quoteData as Quote[];
  }

  allQuotes() {
    return this.quoteData;
  }

  quotesByCategory(category: QuoteCategory) {
    return this.allQuotes().filter(quote => quote.category === category);
  }
}
