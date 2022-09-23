import { Doctor } from "./doctor.js";


export default class Department {
    constructor(data) {

        this.name = data.name;
        this.doctors = [];
        this.patients = [];
        this.floor = data.floor;

        this.init(data.doctors);
    }

    init(doctors) {
        if (doctors) {
            doctors.forEach((doctor) => {
                this.createDoctor(doctor);
            });
        }
    }

    createDoctor(properties) {
        const newDoctor = new Doctor(properties);
        this.doctors.push(newDoctor);
    }
    removeDoctor() {
        console.log('removeDoctor');
    }
    movePatient() {
        console.log('movePatient');
    }
}
