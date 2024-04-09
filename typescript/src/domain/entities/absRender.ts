import { ITaskData } from "../types/taskData";

/**
 * Class Abstract
*/
export default abstract class AbsRender {
    abstract render(): void;
    abstract generateStruct(obj: ITaskData): string;
}