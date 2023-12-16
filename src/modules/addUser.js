"use strict";

import { render } from "./render";

export const addUser = () => {
  const form = document.querySelector("form");
  const inputName = form.querySelector("#form-name");
  const inputEmail = form.querySelector("#form-email");
  const childInput = form.querySelector("#form-children");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {
      name: inputName.value,
      email: inputEmail.value,
      children: childInput.checked,
      permissions: false,
    };

    userService.addUser(user).then(() => {
      userService.getUser().then((users) => render(users));
    });
  });
};
