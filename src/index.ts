import { HeartSurgeon, NeuroSurgeon, Surgeon } from "./lsp/Surgeon";
import { Medicament } from "./ocp/Medicament";
import { DetailedPrescription } from "./ocp/prescription/DetailedPrescription";
import { PrescriptionPrinter } from "./ocp/prescription/PrintPrescription";
import { SimplePrescription } from "./ocp/prescription/SimplePrescription";
import { Admission } from "./di/PatientAdmission";
import { Patient } from "./theGoodPatient/Patient.model";
import { Room } from "./srp/Room";
import { RoomAssignment } from "./srp/RoomAssignment";
import { Aspirin } from "./is/Aspirin";
import { Insulin } from "./is/Insulin";
import { InjectableDrug } from "./is/interfaces/Injectable.interface";
import { OralDrug } from "./is/interfaces/Oral.interface";

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