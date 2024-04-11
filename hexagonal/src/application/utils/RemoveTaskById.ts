import { IRemoveTask } from "../../domain/interfaces/IRemoveTask";
import { IRemoveTaskById } from "../../domain/interfaces/IRemoveTaskById";

export class RemoveTaskById implements IRemoveTaskById {
    removeTask: IRemoveTask;

    constructor(removeTask: IRemoveTask) {
        this.removeTask = removeTask
    }

    remove(id: number): void {
        this.removeTask.removeTask(id);
    }
}