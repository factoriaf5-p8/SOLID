/* In this example, Admission is a high-level module and Patient is a low-level module. The Admission class doesn't depend directly on the Patient class. Instead, both Admission and Patient depend on the IPatient interface. This is an example of the Dependency Inversion Principle.
 */

import { IPatient } from '../theGoodPatient/Patient.interface';

export class Admission {
    constructor(private patient: IPatient) { }

    admitPatient() {
        console.log(`Admitting patient: ${this.patient.getDetails()}`);
    }
}



/*
class Patient {
constructor(private name: string, private age: number, private illness: string) {}

getDetails(): string {
  return `${this.name}, ${this.age}, suffering from ${this.illness}`;
}
}

class Admission {
constructor(private patient: Patient) {}

admitPatient() {
  console.log(`Admitting patient: ${this.patient.getDetails()}`);
}
}

const patient = new Patient('John Doe', 45, 'Flu');
const admission = new Admission(patient);

admission.admitPatient(); // Outputs: Admitting patient: John Doe, 45, suffering from Flu */