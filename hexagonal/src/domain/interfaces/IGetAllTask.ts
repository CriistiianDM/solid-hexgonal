import { Task } from "../entities/Task";

/**
 * Get All Task 
*/
export interface IGetAllTask {
    getAllTasks(): Task[];
}