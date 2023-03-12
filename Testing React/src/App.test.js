import App from "./App";
import { jest } from "@jest/globals"
import { fireEvent, render } from "@testing-library/react";

describe("Test App", () => {

    test("App Launch", () => {
        render(<App />);
    })

    test("Test hello world by text", () => {

        const { getByText } = render(<App />);
        expect(getByText("Hello World!")).toBeInTheDocument()
    })

    test("Test hello world by id", () => {

        const { getByTestId } = render(<App />);
        expect(getByTestId("test-text")).toHaveTextContent("Hello World!");
    })

    test("Test click hello world", () => {

        const props = {
            helloWorld: jest.fn()
        }

        const { container } = render(<App {...props} />);
        // const innerElem = container.getElementsByClassName('inner-elem');

        // expect(innerElem).toHaveLength(1);

        const buttonElem = container.getElementsByClassName("hello-button")
        fireEvent.click(buttonElem[0]);
        expect(props.helloWorld).toHaveBeenCalledTimes(1);
    })

    test("Testing increment", () => {

        const { getAllByTestId } = render(<App />)

        const incrementButton = getAllByTestId('increment-button')[0];
        const counterNumber = getAllByTestId('counter-number')[0];

        const beforeClick = parseInt(counterNumber.innerHTML);

        expect(beforeClick).toEqual(expect.any(Number));

        fireEvent.click(incrementButton);

        // setTimeout(() => {

        const afterClick = parseInt(counterNumber.innerHTML);

        expect(afterClick).toEqual(expect.any(Number));
        expect(afterClick).toBe(beforeClick + 1)

        // }, 500)
    })
    test("Testing decrement", () => {

        const { getAllByTestId } = render(<App />)

        const decrementButton = getAllByTestId('decrement-button')[0];
        const counterNumber = getAllByTestId('counter-number')[0];

        const beforeClick = parseInt(counterNumber.innerHTML);

        expect(beforeClick).toEqual(expect.any(Number));

        fireEvent.click(decrementButton);

        // setTimeout(() => {

        const afterClick = parseInt(counterNumber.innerHTML);

        expect(afterClick).toEqual(expect.any(Number));
        expect(afterClick).toBe(beforeClick - 1)

        // }, 500)
    })
})