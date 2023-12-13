import { IPatient } from './Patient.interface';

export class Patient implements IPatient {
    constructor(private _name: string, private _age: number, private _illness: string) { }

    get name(): string {
        return this._name;
    }
    get age(): number {
        return this._age;
    }
    get illness(): string {
        return this._illness;
    }

    getDetails(): string {
        return `${this.name}, ${this.age}, suffering from ${this.illness}`;
    }
}
