import { ITaskData } from "../types/taskData";

/**
 * interface ILocalstore
*/
export type ILocalstore = {
    removeTask(tag: number): void;
    setData(obj: ITaskData): void;
}