import { Medicament } from '../Medicament';
import { Prescription } from './Prescription';


export class DetailedPrescription implements Prescription {
    createPrescription(medicament: Medicament): string {
        return `Descripción detallada de ${medicament.name}: ${medicament.description}`;
    }
}
