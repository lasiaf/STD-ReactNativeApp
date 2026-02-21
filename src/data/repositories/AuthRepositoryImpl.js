/*
export class AuthRepositoryImpl {
  constructor(api) {
    this.api = api;
  }

  async login(username, password) {
    const res = await this.api.post('/login', {
      username,
      password
    });

    return res.data;
  }
}
*/

import apiClient from "../../core/api/apiclient";

export class AuthRepositoryImpl {
  async login(username, password) {

    const response = await apiClient.post("/login", {
      username: username,
      password: password
    });

    return response.data;
  }
}