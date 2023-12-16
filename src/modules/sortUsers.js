import { render } from "./render";

export const sortUsers = () => {
  const sortIsChildrenHeader = document.getElementById("sort-is-children");

  let isSort = false;

  sortIsChildrenHeader.style.cursor = "pointer";

  sortIsChildrenHeader.addEventListener("click", () => {
    userService
      .getSortUsers({
        name: "children",
        value: isSort ? "asc" : "desc",
      })
      .then((users) => {
        render(users);
      });

    isSort = !isSort;
  });
};
