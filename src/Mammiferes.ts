import { Ianimaux } from "./Animaux";

export abstract class Mammiferes implements Ianimaux {
    private _temps_Gestation : number;
    public nom: string;

    constructor (nomAnim: string, temps_Gest: number) {
        this.nom = nomAnim,
        this._temps_Gestation = temps_Gest
    }
    
    cri() {
        console.log("nous sommes des mammifères");
    }

    
}