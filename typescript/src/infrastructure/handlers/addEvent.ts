import AbsController from "../../domain/entities/absController";
import IEventExecute from "../../domain/interfaces/eventExecute";
import { EventHandler } from "../../domain/types/eventHandler";

/**
 * Add event
*/
export default class AddEvent extends AbsController implements IEventExecute {
    eventType: string;
    eventName: string;
    handleFunc: Function;

    constructor(obj: EventHandler) {
        super();
        this.eventType = obj.eventType;
        this.eventName = obj.eventName;
        this.handleFunc = obj.handleFunc;
    }

    public listener() : void {
        let nodesListener : NodeListOf<Element> = document.querySelectorAll(this.eventName);

        /**
         * CLick - Add Task 
        */
        if (nodesListener) {

            nodesListener.forEach((event) => {
                event.addEventListener(this.eventType, (e) => {
                    this.handleFunc(e);
                });
            })
        }
    }
}