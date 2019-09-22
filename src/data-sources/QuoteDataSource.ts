import { DataSource } from 'apollo-datasource';
import quoteData from './quotes.json';

type QuoteCategory = 'HarryPotter' | 'Shakespeare' | 'Simpsons' | 'Yoda' | 'Lunch';

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

  quotes() {
    return this.quoteData;
  }
}
