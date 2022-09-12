class Vechile {
  numberOfWheels;
  topSpeed;
  //   static statusCodes = [
  //     {
  //       code: 1,
  //       description: "pending",
  //     },
  //     {
  //       code: 2,
  //       description: "in progrss",
  //     },
  //   ];

  constructor(speed) {
    this.topSpeed = speed;
  }

  setNumberOfWheels(number) {
    this.numberOfWheels = number;
  }

  setTopSpeed(speed) {
    this.topSpeed = speed;
  }

  //   static staticFunction() {
  //     return "Static value";
  //   }

  //   printTopSpeed() {
  //     console.log("topSpeed", this.nonExisting);
  //     console.log("static prop", Vechile.staticProp);
  //   }

  //   async asyncFunction() {
  //     return await new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("Finished!");
  //       }, 2000);
  //     });
  //   }
}

// console.log("staticProp", Vechile.statusCodes);
// // console.log("staticFunction", Vechile.staticFunction());

// async function init() {
//   const car = new Vechile(120);
//   const result = car.asyncFunction();
//   console.log(result);
// }

// Vechile.statusCodes;

// init();
// // car.printTopSpeed();
// // console.log("car", car);
