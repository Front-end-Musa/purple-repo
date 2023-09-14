import { User } from "./user.js";
import { Task } from "./task.js";

const task = new Task(),
    user = new User(task);

user.do();
