import { ITaskData } from "../types/taskData";

/**
 * interface ILocalstore
*/
export type LocalstorePost = {
    setData(obj: ITaskData): void;
}