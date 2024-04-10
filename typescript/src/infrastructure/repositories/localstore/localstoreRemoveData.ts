import AbsLocalstoreRemove from "../../../domain/entities/absLocalstoreRemove";

export default class LocalstoreRemoveData extends AbsLocalstoreRemove {

    public removeTask(task: number) {
        this.haveLocalstore()
        let data = JSON.parse(localStorage.getItem("task"));
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