"use strict";

export class UserService {
  getUser() {
    return fetch("http://localhost:4545/users")
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  addUser(user) {
    return fetch("http://localhost:4545/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  }

  removeUser(id) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  changeUser(id, data) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
}
