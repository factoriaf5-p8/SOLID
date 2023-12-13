export class Medicament {
    constructor(private _name:string,private _description:string){}
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
}