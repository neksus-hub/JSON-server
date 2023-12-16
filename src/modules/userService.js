export class UserService {
  getUser() {
    return fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  addUser(user) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  removeUser(id) {
    return fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }
}
