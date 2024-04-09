/**
 * Interface  
*/
export default interface IEventController {
    eventType: string,
    eventName: string
}

/**
 * interface data task 
*/
export interface ITaskData {
    id: number;
    title: string;
    desc: string;
    type: number;
}

/**
 * interface ILocalstore
*/
export interface ILocalstore {
    removeTask(tag: number): void;
    setData(obj: ITaskData): void;
}

/**
 * interface IRenderTable
*/
export interface IRenderTable {
    render(): void;
}

/**
 * interface IRenderTable
*/
export interface ILocalstoreIndex {
    getIndex(): number;
}