export class Doctor {
    constructor(obj) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.expertise = obj.expertise;
        this.patiens = [];
        this.canPerformOperations = false;


    }
    createPatien() {
        console.log("createPatien");
    }
    removePatien() {
        console.log("removePatien");
    }
    performeTreatment() {
        console.log("performeTreatment");
    }



}