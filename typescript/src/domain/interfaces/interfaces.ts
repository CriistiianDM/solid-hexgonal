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