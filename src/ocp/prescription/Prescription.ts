import { Medicament } from '../Medicament';

export interface Prescription {
    createPrescription(medicament: Medicament): string;
  }


// Sin OCP

// class Medicament {
//     name: string;
//     description: string;

//     constructor(name: string, description: string) {
//         this.name = name;
//         this.description = description;
//     }
// }

// class Prescription {
//   medicament: Medicament;

//   constructor(medicament: Medicament) {
//     this.medicament = medicament;
//   }

//   createPrescription(medicament: Medicament): string {
//     return `Prescription for ${medicament.name}: ${medicament.description}`;
//   }

//   createDetailedPrescription(medicament: Medicament): string {
//     return `Detailed prescription for ${medicament.name}: ${medicament.description}`;
//   }
// }