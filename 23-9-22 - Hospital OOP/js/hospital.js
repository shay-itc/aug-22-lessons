import Department from "./department.js"

class Hospital {

    constructor(name, id, address, instructions) {
        this.departments = [];
        this.name = name,
            this.id = id,
            this.address = address

        this.initHospital(instructions);
    }

    initHospital(departmentsProperties) {

        departmentsProperties.forEach((department) => {
            this.createDepartment(department);
        });
    }

    createDepartment(departmentProperties) {
        console.log("createDepartment")

        const newDepartment = new Department(departmentProperties);
        // newDepartment.init(departmentProperties.doctors)
        this.departments.push(newDepartment);
    }

    removeDepartment() {
        console.log("removeDepartment")
    }
}

const newHospital = new Hospital("Rambam", 1, "Haifa", [
    {
        name: 'heart',
        floor: 1,
        doctors: [{
            firstName: 'Michael',
            lastName: 'Ginzburg',
            expertise: 'Hemothology'
        }, {
            firstName: 'dr',
            lastName: 'Brown',
            expertise: 'Hemothology'
        }]
    }, {
        name: 'lungs',
        floor: 2
    }, {
        name: 'brain',
        floor: 6
    }
]);

console.log(newHospital)
