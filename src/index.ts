import { HeartSurgeon, NeuroSurgeon, Surgeon } from "./l/Surgeon";
import { Medicament } from "./o/Medicament";
import { DetailedPrescription } from "./o/prescription/DetailedPrescription";
import { PrescriptionPrinter } from "./o/prescription/PrintPrescription";
import { SimplePrescription } from "./o/prescription/SimplePrescription";
import { Admission } from "./d/PatientAdmission";
import { Patient } from "./theGoodPatient/Patient.model";
import { Room } from "./s/Room";
import { RoomAssignment } from "./s/RoomAssignment";
import { Aspirin } from "./i/Aspirin";
import { Insulin } from "./i/Insulin";
import { InjectableDrug } from "./i/interfaces/Injectable.interface";
import { OralDrug } from "./i/interfaces/Oral.interface";

// srp

const patient = new Patient('John Doe', 45, 'Flu');
const room = new Room(101);
const roomAssignment = new RoomAssignment(patient, room);

roomAssignment.assignRoom();

// ocp

const medicament = new Medicament('Ibuprofeno', 'Anti-inflamatorio');
const simplePrescription = new SimplePrescription();
const detailedPrescription = new DetailedPrescription();
const printer = new PrescriptionPrinter();

printer.printPrescription(simplePrescription, medicament); // Outputs: Prescription for Ibuprofen: Anti-inflammatory drug
printer.printPrescription(detailedPrescription, medicament); // Outputs: Detailed prescription for Ibuprofen: Anti-inflammatory drug

//lsp

function performSurgery(surgeon: Surgeon) {
    surgeon.performSurgery();
}

const heartSurgeon = new HeartSurgeon();
const neuroSurgeon = new NeuroSurgeon();

performSurgery(heartSurgeon); // Outputs: Performing heart surgery
performSurgery(neuroSurgeon); // Outputs: Performing brain surgery


// is

function administerOralDrug(drug: OralDrug) {
    drug.administerOrally();
}

function administerInjectableDrug(drug: InjectableDrug) {
    drug.administerInjection();
}

const aspirin = new Aspirin();
const insulin = new Insulin();

administerOralDrug(aspirin); // Outputs: Administering Aspirin orally
administerInjectableDrug(insulin); // Outputs: Administering Insulin through injection


// di

const admission = new Admission(patient);

admission.admitPatient(); // Outputs: Admitting patient: John Doe, 45, suffering from Flu