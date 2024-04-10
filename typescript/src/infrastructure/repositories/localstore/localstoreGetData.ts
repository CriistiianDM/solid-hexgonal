import AbsLocalstoreGet from "../../../domain/entities/absLocalstoreGet";
import { ITaskData } from "../../../domain/types/taskData";

/***
 * Export localstore data 
*/
export default class LocalstoreGetData extends AbsLocalstoreGet {

    public getData(): ITaskData[] {
        this.haveLocalstore();
        return JSON.parse(localStorage.getItem("task"))
    }

    private haveLocalstore() {
        if (!localStorage.getItem("task")) {
            localStorage.setItem("task", JSON.stringify([]));
        }
    }
}
