import { RESTDataSource } from 'apollo-datasource-rest';

export default class UserDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com"
  }
  getUser(id: number) {
    return this.get(`/users/${id}`)
  }
}