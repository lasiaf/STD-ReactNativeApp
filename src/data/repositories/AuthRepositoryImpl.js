import { loginUser } from '@data/datasources/ApiDatasource';
import { saveToken, getToken, removeToken } from '@data/storage/AuthStorage';

export default class AuthRepositoryImpl {

  async login(data) { return await loginUser(data); }

  async loginAcc(data) {
    
    const token = data;
    let response = "";

    if (token) {
      response = await saveToken(token);
    }

    return response;
  }

  async getToken() {
    return await getToken();
  }

  async logout() {
    await removeToken();
  }

  async isLoggedIn() {
    const token = await getToken();

    return token !== null;
  }

  /*
  loginProcess: async (email, password) => {

    const response = await loginApi(email, password);

    const token = response.access_token;

    await saveToken(token);

    return response;
  },

  getToken: async () => {
    return await getToken();
  },

  logout: async () => {
    await removeToken();
  },

  isLoggedIn: async () => {

    const token = await getToken();

    return token !== null;
  }
  */
}

/*
import User from "../../domain/entities/user";

export default class AuthRepositoryImpl {
  async login(username, password) {

    // simulasi login
    if (username === "admin" && password === "123") {
      return new User(username, "token123");
    }

    throw new Error("Username atau password salah");
  }
}
  */
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
/*
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
*/
