/*
export class User {
  constructor(id, name, token) {
    this.id = id;
    this.name = name;
    this.token = token;
  }
}
*/
export default class User {
  constructor(username, token) {
    this.username = username;
    this.token = token;
  }
}