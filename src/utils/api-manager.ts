export type User = {
  name: string;
  uniqueID: string;
  email: string;
  hall: string;
} | null;

export default class APIManager {
  private static _instance: APIManager;

  private constructor() {}

  public static instance() {
    if (!this._instance) this._instance = new APIManager();

    return this._instance;
  }

  public async getUserByID(id: string, token: string): Promise<User> {
    const apiResponse = await (
      await this.callAPI({ path: `/users/${id}`, method: "GET", token })
    ).json();

    if (apiResponse.error) {
      this.handleError(apiResponse.error);
    }

    return apiResponse[id] as User;
  }

  public async registerUser(
    id: string,
    token: string,
    inviteCode: string
  ): Promise<User> {
    const apiResponse = await (
      await this.callAPI({
        path: `/users/${id}?inviteCode=${inviteCode}`,
        token: token,
        method: "POST",
      })
    ).json();

    if (apiResponse.error) {
      this.handleError(apiResponse.error);
    }

    return apiResponse[id] as User;
  }

  private handleError(error: string): void {
    console.error("Call to API returned an error: ", error);
  }

  private callAPI(opts: {
    path: string;
    method: string;
    token: string;
  }): Promise<Response> {
    return fetch(
      `https://us-central1-reshawk-app.cloudfunctions.net/api/${opts.path}`,
      {
        headers: {
          Authorization: `Bearer ${opts.token}`,
        },
        method: opts.method,
      }
    );
  }
}
