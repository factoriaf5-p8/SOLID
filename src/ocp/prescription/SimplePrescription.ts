import { Medicament } from '../Medicament';
import { Prescription } from './Prescription';


export class SimplePrescription implements Prescription {
    createPrescription(medicament: Medicament): string {
        return `Prescription for ${medicament.name}: ${medicament.description}`;
    }
}
