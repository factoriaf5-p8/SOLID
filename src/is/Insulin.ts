import { InjectableDrug } from "./interfaces/Injectable.interface";

export class Insulin implements InjectableDrug {
    administerInjection() {
      console.log("Administering Insulin through injection");
    }
  }