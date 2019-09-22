import { RESTDataSource } from 'apollo-datasource-rest';

type User = {
  id: number;
  name?: string;
  username: string;
  email?: string;
};

let extraUsers: User[] = [];

export default class UserDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://jsonplaceholder.typicode.com/`;
  }

  getUsers() {
    return this.get<User[]>('users');
  }

  getUser(id: number) {
    if (id > 5) {
      return extraUsers.find(user => user.id === id);
    }
    return this.get<User>(`users/${id}`);
  }

  getByUserName(username: string) {
    return extraUsers.find(user => user.username === username);
  }

  createUser(username: string) {
    const newUser = { username, id: 100 + extraUsers.length };
    extraUsers = [newUser, ...extraUsers];
    return newUser;
  }
}
