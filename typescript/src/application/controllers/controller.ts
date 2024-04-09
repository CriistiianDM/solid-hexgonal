import AbsController from "../../domain/entities/entities";
import IEventController from "../../domain/interfaces/interfaces";

/**
 * Init logit
*/
export default class AddEvent extends AbsController implements IEventController {
    eventType: string;
    eventName: string;
    handleFunc: Function;

    constructor(obj: {
        eventType: string,
        eventName: string,
        handleFunc: Function
    }) {
        super();
        this.eventType = obj.eventType;
        this.eventName = obj.eventName;
        this.handleFunc = obj.handleFunc;
    }

    public listener() : void {
        let click : Element = document.querySelector(this.eventName);

        /**
         * CLick - Add Task 
        */
        if (click) {
            click.addEventListener(this.eventType, (e) => {
                this.handleFunc(e);
            });
        }
    }
}

/**
 *   
*/