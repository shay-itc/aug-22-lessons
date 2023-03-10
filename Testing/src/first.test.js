import { add, multiply, multiply2 } from "./math";


// Create a test for a funciton that takes 2 parameters and multiplys them
// then create the function 

// AAA
// Arrange - arrange the data and the test
// Act - perform the actions that you are going to test
// Assert - validate the actual result for the test


// Create a function that receives 2 parameters, 
// if the multiplication of the parameters is less or equal to 10 it should return 1
// if the multiplication of the parameters is greater than 10 and lower than 51 it should return 2
// if the multiplication of the parameters is greater than 50 it should return 3

describe("Test multiple value function", () => {
    test("Test >= 10", () => {
        const a = 2;
        const b = 2;

        const result = multiply2(a, b);

        expect(result).toBe(1);
    })
    test("Test >= 50", () => {

        const a = 10;
        const b = 2;

        const result = multiply2(a, b);

        expect(result).toBe(2);
    })
    test("Test > 50", () => {

        const a = 100;
        const b = 2;

        const result = multiply2(a, b);

        expect(result).toBe(3);
    })
})


// test("Test multiply", () => {

//     // Arrange
//     const a = 3;
//     const b = 2;

//     // Act
//     const result = multiply(a, b);

//     // Assert
//     expect(result).toBe(6);
// })

// describe("Testing add funciton", () => {
//     test("Test 1", () => {

//         const a = 5;
//         const b = 5;
//         const result = add(a, b);

//         expect(result).toBe(10);
//     })


//     test("Test 2", () => {

//         const a = 123;
//         const b = 7;
//         const result = add(a, b);

//         expect(result).toBe(130);
//     })
// })