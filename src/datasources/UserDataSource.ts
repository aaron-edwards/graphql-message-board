import { RESTDataSource, Response, Request } from 'apollo-datasource-rest';

export default class UserDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com"
  }
  getUser(id: number) {
    return this.get(`/users/${id}`)
  }
  
  protected async didReceiveResponse(response: Response, request: Request) {
    console.log(`Response From ${response.url} ${response.status}`);
    if (response.status === 404) {
      return undefined;
    }
    return super.didReceiveResponse(response, request);
  }

}