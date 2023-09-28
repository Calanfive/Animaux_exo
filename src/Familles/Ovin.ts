import { Mammiferes } from "../Mammiferes";

export abstract class Ovin extends Mammiferes {

    private _alimentation : string;

    constructor(nomOvin: string, tempsDEgestation: number, alimention : string) {
        super(nomOvin, tempsDEgestation)
        this._alimentation = alimention
    }

}