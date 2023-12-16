"use strict";

import { render } from "./render";

export const editUser = () => {
  const tbody = document.getElementById("table-body");

  const form = document.querySelector("form");
  const inputName = form.querySelector("#form-name");
  const inputEmail = form.querySelector("#form-email");
  const childInput = form.querySelector("#form-children");

  tbody.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.closest(".btn-edit")) {
      const tr = e.target.closest("tr");
      const id = tr.dataset.key;

      userService.getMutableUser(id).then((user) => {
        console.log(user);
        inputName.value = user.name;
        inputEmail.value = user.email;
        childInput.checked = user.children;

        form.dataset.method = id;
      });
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (form.dataset.method) {
      const id = form.dataset.method;
      const user = {
        name: inputName.value,
        email: inputEmail.value,
        children: childInput.checked,
        permissions: false,
      };

      userService.editUser(id, user).then(() => {
        userService.getUser().then((users) => {
          render(users);
          form.reset();
          form.removeAttribute("data-method");
        });
      });
    }
  });
};
