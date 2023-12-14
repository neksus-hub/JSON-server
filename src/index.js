import { first } from "./modules/first";
import { UserService } from "./modules/userService";

const userSevice = new UserService();

first(userSevice);
