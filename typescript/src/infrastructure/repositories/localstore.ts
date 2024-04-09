import { AbsLocalstore , AbsLocalstoreIndex } from "../../domain/entities/entities";
import { ITaskData } from "../../domain/interfaces/interfaces";

/***
 * Export localstore data 
*/
export default class LocalstoreData extends AbsLocalstore {

    public getData(): ITaskData[] {
        this.haveLocalstore();
        return JSON.parse(localStorage.getItem("task"))
    }

    public setData(obj: ITaskData) {
        const allTask = this.getData();
        allTask.push(obj)
        localStorage.setItem("task", JSON.stringify(allTask));
    }

    public removeTask(task: number) {
        let data = this.getData();
        if (data.length > 0) {
            data = data.filter(( taskItem ) => {
                return taskItem.id !== task
            })
            localStorage.setItem("task", JSON.stringify(data));
        }
    }   

    private haveLocalstore() {
        if (!localStorage.getItem("task")) {
            localStorage.setItem("task", JSON.stringify([]));
        }
    }
}

/***
 * Export index unique 
*/
export class IndexLocalstore extends AbsLocalstoreIndex {

    public getIndex(): number {
        this.haveLocalstore();       
        return this.parseIndex();
    }

    private parseIndex(): number {
        let index = JSON.parse(localStorage.getItem("index"));
        index = parseInt(index);
        this.setNewIndex(index)
        return index + 1
    }

    private setNewIndex(index: number) {
        localStorage.setItem("index", JSON.stringify(index+1));
    }

    haveLocalstore() {
        if (!localStorage.getItem("index")) {
            localStorage.setItem("index", JSON.stringify(1));
        }
    }
}