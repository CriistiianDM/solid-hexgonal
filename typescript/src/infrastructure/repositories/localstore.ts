import { AbsLocalstore } from "../../domain/entities/entities";
import { ITaskData } from "../../domain/interfaces/interfaces";

/***
 * Export localstore data 
*/
export default class LocalstoreData extends AbsLocalstore {

    public getData(): ITaskData[] {
        this.haveLocalstore();
        return JSON.parse(localStorage.getItem("task"))
    }

    public setData(obj: {
        id: number ,
        title: string,
        desc: string,
        type: number
    }) {
        const allTask = this.getData();
        allTask.push(obj)
        localStorage.setItem("task", JSON.stringify(allTask));
    }

    private haveLocalstore() {
        if (!localStorage.getItem("task")) {
            localStorage.setItem("task", JSON.stringify([]));
        }
    }
}