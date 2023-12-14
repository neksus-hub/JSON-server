export class UserService {
  _users = [];

  getUsers() {
    return this._users;
  }

  setUsers(users) {
    this.users = users;
  }

  logger() {
    console.log(this.users);
  }
}
