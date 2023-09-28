import { Mammiferes } from "../Mammiferes";

export abstract class Felin extends Mammiferes {

    private _taille : number;

    constructor(nomFelin: string, tempsDEgestation: number, longueur: number) {
        super(nomFelin, tempsDEgestation)
        this._taille = longueur
    }
}