import { render } from "./render";

export const removeUser = () => {
  const tbody = document.getElementById("table-body");

  tbody.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.closest(".btn-remove")) {
      const tr = e.target.closest("tr");
      const id = tr.dataset.key;
      console.log(id);

      userService.removeUser(id).then((res) => {
        userService.getUser().then((users) => {
          render(users);
        });
      });
    }
  });
};
