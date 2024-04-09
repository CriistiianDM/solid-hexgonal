/**
 * Class Abstract 
*/
export default abstract class AbsHandlerEvent {
    abstract execute<T extends Event>(e: T): void;
}