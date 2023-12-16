"use strict";

import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUser } from "./modules/addUser";
import { removeUser } from "./modules/removeUser";
import { changePermissions } from "./modules/changePermissions";
import { editUser } from "./modules/editUser";
import { filterUsers } from "./modules/filterUsers";
import { sortUsers } from "./modules/sortUsers";
import { searchUsers } from "./modules/searchUsers";

window.userService = new UserService();

userService.getUser().then((data) => render(data));

addUser();
removeUser();
changePermissions();
editUser();
filterUsers();
sortUsers();
searchUsers();
