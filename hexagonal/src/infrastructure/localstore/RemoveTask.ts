import { IRemoveTask } from "../../domain/interfaces/IRemoveTask";

export class RemoveTask implements IRemoveTask {
    removeTask(id: number): void {
        const allTasks = JSON.parse(localStorage.getItem("task") ?? '[]');
        localStorage.setItem("task",allTasks.filter((item) => item.id !== id));
    }
}