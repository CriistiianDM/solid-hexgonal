import { ITaskData } from "../types/taskData";

/**
 * interface ILocalstore
*/
export type LocalstoreGet = {
    getData(): ITaskData[];
}