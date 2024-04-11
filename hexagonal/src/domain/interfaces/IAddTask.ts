import { Task } from "../entities/Task";

/**
 * Interface Add Task
*/
export interface IAddTask {
    addTask(task: Task): void;
}