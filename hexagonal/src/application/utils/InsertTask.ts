import { Task } from "../../domain/entities/Task";
import { IAddTask } from "../../domain/interfaces/IAddTask";
import { ITaskInsert } from "../../domain/interfaces/ITaskInsert";

/**
 * Insert New Task 
*/
export class InsertTask implements ITaskInsert {
    setTask: IAddTask;

    constructor(setTask: IAddTask) {
        this.setTask = setTask;
    }

    uploadTask(task: Task): void {
        this.setTask.addTask(task);
    }
}