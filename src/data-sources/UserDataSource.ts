import { RESTDataSource } from 'apollo-datasource-rest';

type User = {
  id: number;
  name?: string;
  username: string;
  email?: string;
};

export default class UserDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://jsonplaceholder.typicode.com/`;
  }

  getUsers() {
    return this.get<User[]>('users');
  }

  getUser(id: number) {
    return this.get<User>(`users/${id}`);
  }
}
