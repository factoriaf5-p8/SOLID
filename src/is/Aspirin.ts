/*
The Interface Segregation Principle (ISP) states that no client should be forced to depend on interfaces they do not use. This principle deals with the disadvantages of "fat" interfaces.

Here's an example in the context of drug administration:

In this example, instead of having a single Drug interface with methods for all types of drug administration, we have segregated the interfaces based on the type of administration - OralDrug and InjectableDrug. This way, each drug class only needs to implement the methods that are relevant to it, adhering to the Interface Segregation Principle. */

import { OralDrug } from "./interfaces/Oral.interface";


export class Aspirin implements OralDrug {
    administerOrally() {
      console.log("Administering Aspirin orally");
    }
  }




  /* interface Drug {
  administerOrally(): void;
  administerInjection(): void;
}

class Aspirin implements Drug {
  administerOrally() {
    console.log("Administering Aspirin orally");
  }

  administerInjection() {
    throw new Error("Cannot administer Aspirin through injection");
  }
}

class Insulin implements Drug {
  administerOrally() {
    throw new Error("Cannot administer Insulin orally");
  }

  administerInjection() {
    console.log("Administering Insulin through injection");
  }
}

function administerDrug(drug: Drug) {
  drug.administerOrally();
  drug.administerInjection();
}

const aspirin = new Aspirin();
const insulin = new Insulin();

administerDrug(aspirin); // Throws error: Cannot administer Aspirin through injection
administerDrug(insulin); // Throws error: Cannot administer Insulin orally */