// api/models/users.js

export default class User {
  // eslint-disable-next-line no-unused-vars
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = false;
  }
}
