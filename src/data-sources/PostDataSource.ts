import { DataSource } from 'apollo-datasource';
import posts from './posts.json';

export type Post = {
  id: number;
  title: string;
  userId: number;
  timestamp: String;
};

export default class PostDataSource extends DataSource {
  posts() {
    return posts;
  }

  post(id: number) {
    return posts.find(p => p.id === id);
  }
}
