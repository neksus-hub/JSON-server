import { render } from "./render";

export const filterUsers = () => {
  const isChildBtn = document.getElementById("btn-isChildren");
  const isPermBtn = document.getElementById("btn-isPermissions");
  const isAllBtn = document.getElementById("btn-isAll");

  isChildBtn.addEventListener("click", () => {
    userService.filterUsers("children").then((users) => render(users));
  });

  isPermBtn.addEventListener("click", () => {
    userService.filterUsers("permissions").then((users) => render(users));
  });

  isAllBtn.addEventListener("click", () => {
    userService.getUser().then((users) => render(users));
  });
};
