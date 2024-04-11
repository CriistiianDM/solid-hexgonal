import { Task } from "../../domain/entities/Task";
import { IGetTasks } from "../../domain/interfaces/IGetTasks";

/**
 * Return all task created 
*/
export class GetTask implements IGetTasks {
    getTasks(): Task[] {
        return JSON.parse(localStorage.getItem("tasks") ?? '[]');
    }
}