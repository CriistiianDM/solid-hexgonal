import { Task } from "../../domain/entities/Task"; 
import { IGetTasks } from "../../domain/interfaces/IGetTasks";
import { IGetAllTask } from "../../domain/interfaces/IGetAllTask";

/**
 * GetTask 
*/
export class GetAllTask implements IGetAllTask {
    getTasks: IGetTasks;

    constructor(getTask: IGetTasks)  {
        this.getTasks = getTask;
    }

    getAllTasks(): Task[] {
        return this.getTasks.getTasks();
    }
}