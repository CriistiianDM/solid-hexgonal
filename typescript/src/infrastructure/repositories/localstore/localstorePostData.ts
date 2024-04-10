import AbsLocalstorePost from "../../../domain/entities/absLocalstorePost";
import { ITaskData } from "../../../domain/types/taskData";

export default class LocalstorePostData extends AbsLocalstorePost {

    public setData(obj: ITaskData) {
        this.haveLocalstore()
        const allTask = JSON.parse(localStorage.getItem("task"));
        allTask.push(obj)
        localStorage.setItem("task", JSON.stringify(allTask));
    }

    private haveLocalstore() {
        if (!localStorage.getItem("task")) {
            localStorage.setItem("task", JSON.stringify([]));
        }
    }
}