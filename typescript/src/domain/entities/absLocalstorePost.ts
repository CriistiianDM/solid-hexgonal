import { ITaskData } from "../types/taskData";

/**
 * Class Abstract
*/
export default abstract class AbsLocalstoreGet {
    abstract setData(obj: ITaskData): void;
}
