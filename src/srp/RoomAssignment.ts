import { Patient } from "../theGoodPatient/Patient.model";
import { Room } from "./Room";

export class RoomAssignment {
    constructor(private patient: Patient, private room: Room) { }

    assignRoom() {
        console.log(`Assigning room ${this.room.roomNumber} to patient ${this.patient.name}`);
    }
}

/*
In this example, each class has a single responsibility. The Patient class is responsible for patient-related information, the Room class is responsible for room-related information, and the RoomAssignment class is responsible for assigning a room to a patient. This adheres to the Single Responsibility Principle.
*/



/*
class Patient {
constructor(public name: string, public illness: string, public roomNumber?: number) {}

assignRoom(roomNumber: number) {
  this.roomNumber = roomNumber;
  console.log(`Assigning room ${this.roomNumber} to patient ${this.name}`);
}
}

const patient = new Patient('John Doe', 'Flu');
patient.assignRoom(101); // Outputs: Assigning room 101 to patient John Doe
*/

