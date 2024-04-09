/**
 * Class Abstract add task
*/
export default abstract class AbsController {
    abstract listener(): void;
}

export abstract class AbsHandlerEvent {
    abstract execute(): void;
}