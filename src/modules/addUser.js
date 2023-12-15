export const addUser = () => {
  const form = document.querySelector("form");
  const inputName = form.querySelector("#form-name");
  const inputEmail = form.querySelector("#form-email");
  const childInput = form.querySelector("#form-children");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
      name: inputName.value,
      email: inputEmail.value,
      children: childInput.checked,
      permissions: false,
    };

    userService.addUser(user);
  });
};
