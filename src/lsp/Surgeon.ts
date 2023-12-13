/*
In this example, HeartSurgeon and NeuroSurgeon are subtypes of Surgeon. The performSurgery function can accept any object of type Surgeon. This means we can pass in an object of type HeartSurgeon or NeuroSurgeon and the function will work correctly. This is the Liskov Substitution Principle in action.*/

export abstract class Surgeon {
    abstract performSurgery(): void;
  }

export class HeartSurgeon extends Surgeon {
    performSurgery(): void {
      console.log("Performing heart surgery");
    }
  }

export class NeuroSurgeon extends Surgeon {
    performSurgery(): void {
      console.log("Performing brain surgery");
    }
  }

