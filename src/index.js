"use strict";

import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUser } from "./modules/addUser";
import { removeUser } from "./modules/removeUser";
import { changePermissions } from "./modules/changePermissions";
import { editUser } from "./modules/editUser";

window.userService = new UserService();

userService.getUser().then((data) => render(data));

addUser();
removeUser();
changePermissions();
editUser();
