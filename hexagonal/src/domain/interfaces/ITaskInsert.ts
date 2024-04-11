import { Task } from "../entities/Task";

export interface ITaskInsert {
    uploadTask(task: Task): void;
}