/* In this example, Prescription is an interface that is open for extension. Any class that implements Prescription must provide a createPrescription method. SimplePrescription and DetailedPrescription are two such classes. PrescriptionPrinter is closed for modification because it depends on the abstraction Prescription, not on the concrete classes SimplePrescription and DetailedPrescription. This way, you can add as many types of prescriptions as you want without having to modify PrescriptionPrinter. */


import { Prescription } from './Prescription';
import { Medicament } from '../Medicament';

export class PrescriptionPrinter {
    printPrescription(prescription: Prescription, medicament: Medicament) {
        console.log(prescription.createPrescription(medicament));
    }
}

