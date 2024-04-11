import { IsetIndex } from "../../domain/interfaces/IsetIndex";

/**
 *  * Set Index 
*/
export class SetIndex implements IsetIndex {
    key: string;

    constructor() {
        this.key = "index";
    }

    setIndex(): void {
        this.haveLocalstore();
        const 
            getIndex = JSON.parse(localStorage.getItem(this.key) ?? '0');

        localStorage.setItem(this.key, JSON.stringify(getIndex+1));
    }

    private haveLocalstore(): void {
        if (!localStorage.getItem(this.key)) {
            localStorage.setItem(this.key, JSON.stringify(1));
        }
    }
}