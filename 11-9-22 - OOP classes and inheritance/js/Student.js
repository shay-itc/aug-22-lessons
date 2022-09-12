class Person {
  firstName;
  lastName;
  birthdate;
  fullName;

  constructor(options) {
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.birthdate = options.birthdate;
    this.fullName = this.lastName + " " + this.firstName;
  }

  getAge() {
    const today = new Date();
    const birtday = new Date(this.birthdate);

    return today.getFullYear() - birtday.getFullYear();
  }
}

class Student extends Person {
  param;

  constructor(options) {
    super(options);

    this.param = options.param;
  }
  studyingSubjects = [];

  setStudyingSubjects(subjects) {
    this.studyingSubjects = subjects;
  }

  addStudyingSubject(subject) {
    this.studyingSubjects.push(subject);
  }
}

class Teacher extends Person {
  param2;
  constructor(options) {
    super(options);

    this.param2 = options.param2;
  }

  teachingSubjects = [];

  setTeachingSubjects(subjects) {
    this.teachingSubjects = subjects;
  }
}

const student = new Student({
  firstName: "First",
  lastName: "Last",
  birthdate: "01/01/2020",
  param: "student only",
});

student.setStudyingSubjects(["Math"]);
student.addStudyingSubject("English");

console.log("student", student);

const teacher = new Teacher({
  firstName: "First",
  lastName: "Last",
  birthdate: "01/01/2020",
  param2: "teacher only",
});

console.log("teacher", teacher);
