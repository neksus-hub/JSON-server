"use strict";

export class UserService {
  getData(url) {
    return fetch(url)
      .then((res) => res.json())
      .catch(() => {
        const table = document.querySelector(".table");
        const error = document.createElement("p");

        error.style.color = "red";
        error.textContent = "Произошла ошибка, данных нет!";
        table.append(error);

        console.log("Данных нет!");
      });
  }

  sendData(url, method, data) {
    return fetch(url, {
      method: `${method}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch(() => {
        const table = document.querySelector(".table");
        const error = document.createElement("p");

        error.style.color = "red";
        error.textContent = "Запрос на сервер не отправлен";
        table.append(error);

        console.log("Запрос не отправлен");
      });
  }

  getUser() {
    return this.getData("http://localhost:4545/users");
  }

  addUser(user) {
    return this.sendData("http://localhost:4545/users", "POST", user);
  }

  removeUser(id) {
    return this.sendData(`http://localhost:4545/users/${id}`, "DELETE");
  }

  changeUser(id, data) {
    return this.sendData(`http://localhost:4545/users/${id}`, "PATCH", data);
  }

  getMutableUser(id) {
    return this.getData(`http://localhost:4545/users/${id}`);
  }

  editUser(id, user) {
    return this.sendData(`http://localhost:4545/users/${id}`, "PUT", user);
  }

  filterUsers(filterOption) {
    return this.getData(`http://localhost:4545/users?${filterOption}=true`);
  }

  getSortUsers(sortOption) {
    return this.getData(
      `http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`
    );
  }

  getSearchUsers(str) {
    return this.getData(`http://localhost:4545/users?name_like=${str}`);
  }
}
