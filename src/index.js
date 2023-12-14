import { render } from "./modules/render";
import { UserService } from "./modules/userService";

window.userService = new UserService();

render(userService.user);
