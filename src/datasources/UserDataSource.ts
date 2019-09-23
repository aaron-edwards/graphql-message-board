import { RESTDataSource, Response, Request, RequestOptions } from 'apollo-datasource-rest';

export default class UserDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com"
  }

  protected willSendRequest?(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
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