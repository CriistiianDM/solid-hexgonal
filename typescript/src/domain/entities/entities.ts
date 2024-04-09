import { ITaskData } from "../interfaces/interfaces"

/**
 * Class Abstract add task
*/
export default abstract class AbsController {
    abstract listener(): void;
}

/**
 * Class Abstract 
*/
export abstract class AbsHandlerEvent {
    abstract execute<T extends Event>(e: T): void;
}

/**
 * Class Abstract
*/
export abstract class AbsLocalstore {
    abstract getData(): ITaskData[];
    abstract setData(obj: ITaskData): void;
}

/**
 * Class Abstract
*/
export abstract class AbsRender {
    abstract render(): void;
    abstract generateStruct(obj: ITaskData): string;
}
