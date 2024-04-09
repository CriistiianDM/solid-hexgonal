import AbsHandlerEvent from "../../domain/entities/absHandlerEvent";
import { ILocalstore } from "../../domain/types/localstoreData";
import { IRenderTable } from "../../domain/types/renderTable";
import { initCheckbox } from "../events/evCheckbox";

/**
 * Remove task list
*/
export default class CheckboxHandler extends AbsHandlerEvent {
    insLocalstore: ILocalstore;
    insRender: IRenderTable;

    constructor(obj : {
        insLocalstore: ILocalstore,
        insRender: IRenderTable
    }) {
        super();
        this.insLocalstore = obj.insLocalstore;
        this.insRender = obj.insRender;
    }

    public execute<T extends Event>(e: T): void {
        const 
            checkbox = e.currentTarget as HTMLInputElement,
            div = checkbox.parentElement,
            tag = div.getAttribute('tag');
            
        this.insLocalstore.removeTask(parseInt(tag));
        this.insRender.render();
        initCheckbox.listener();
    }
}