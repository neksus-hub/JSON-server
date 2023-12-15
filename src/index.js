import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUser } from "./modules/addUser";

window.userService = new UserService();

userService.getUser().then((data) => render(data));
addUser();
