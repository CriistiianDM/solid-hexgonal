import { Task } from "../entities/Task";

export interface IGetTasks {
    getTasks(): Task[];
}