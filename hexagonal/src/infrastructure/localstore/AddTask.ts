import { Task } from "../../domain/entities/Task";
import { IAddTask } from "../../domain/interfaces/IAddTask";

export class AddTask implements IAddTask {
    addTask(task: Task): void {
        const allTasks = JSON.parse(localStorage.getItem("task") ?? '[]');
        allTasks.push(task)
        localStorage.setItem("task", JSON.stringify(allTasks));
    }
}