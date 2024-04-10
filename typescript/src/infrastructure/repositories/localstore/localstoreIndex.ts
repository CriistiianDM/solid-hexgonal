import AbsLocalstoreIndex from "../../../domain/entities/absLocalstoreIndex";

/**
 * Export index unique 
*/
export default class LocalstoreIndex extends AbsLocalstoreIndex {

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