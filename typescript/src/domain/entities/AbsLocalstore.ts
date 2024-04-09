import { ITaskData } from "../types/taskData";

/**
 * Class Abstract
*/
export default abstract class AbsLocalstore {
    abstract getData(): ITaskData[];
    abstract setData(obj: ITaskData): void;
    abstract removeTask(task: number): void;
}