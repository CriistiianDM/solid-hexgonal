import ITaskData from "./taskData";

/**
 * interface ILocalstore
*/
export default interface ILocalstore {
    removeTask(tag: number): void;
    setData(obj: ITaskData): void;
}