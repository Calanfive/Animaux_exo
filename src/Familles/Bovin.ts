import { Mammiferes } from "../Mammiferes";

export abstract class Bovin extends Mammiferes {
    private _poids : number;

    constructor(nomBovin: string, tempsDEgestation: number, poidsBovin: number) {
        super(nomBovin, tempsDEgestation)
        this._poids = poidsBovin
    }
}