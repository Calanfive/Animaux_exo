import { Mammiferes } from "../Mammiferes";

export abstract class Canide extends Mammiferes {
    private _categorie : string;

    constructor(nomCanide: string, tempsDEgestation: number, cat: string) {
        super(nomCanide, tempsDEgestation)
        this._categorie = cat
    }
}