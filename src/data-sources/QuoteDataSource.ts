import { DataSource } from 'apollo-datasource';
import quotes from './quotes.json';

export type QuoteCategory = 'HarryPotter' | 'Shakespeare' | 'Simpsons' | 'Yoda' | 'Lunch';

export type Quote = {
  id: number;
  text: string;
  userId: number;
  category: QuoteCategory;
  timestamp: string;
};

let quoteData = quotes;

export default class QuoteDataSource extends DataSource {
  constructor() {
    super();
    quoteData = quoteData as Quote[];
  }

  allQuotes() {
    return quoteData;
  }

  quotesByCategory(category: QuoteCategory) {
    return this.allQuotes().filter(quote => quote.category === category);
  }

  create(text: string, category: QuoteCategory, userId: number) {
    const newQuote = {
      id: quoteData.length,
      text,
      userId,
      category,
      timestamp: new Date().toISOString(),
    };
    quoteData = [newQuote, ...quoteData];
    return newQuote;
  }
}
