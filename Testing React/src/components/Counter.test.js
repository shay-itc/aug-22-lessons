import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Test Counter", () => {

    // AAA
    // Arange
    // Act 
    // Assert

    test("Counter Launch", () => {

        const props = {
            counter: { value: 10 },
            onIncrement: jest.fn()
        }

        render(<Counter {...props} />);
    })

    // check that the plus button exist and has a plus sign in it
    test('Test plus symbol', () => {

        const props = {
            counter: { value: 10 },
            onIncrement: jest.fn(),
            onDecrement: jest.fn(),
            onDelete: jest.fn(),
        }

        const { getAllByTestId, getAllByText } = render(<Counter {...props} />);
        expect(getAllByTestId('increment-button')[0]).toHaveTextContent('+');

        expect(getAllByText('+')[0]).toBeInTheDocument();
    })

    test("Test plus button click", () => {

        const props = {
            counter: { value: 10 },
            onIncrement: jest.fn()
        }

        const { getAllByTestId } = render(<Counter {...props} />);

        const incrementButton = getAllByTestId('increment-button')[0];

        fireEvent.click(incrementButton);
        expect(props.onIncrement).toHaveBeenCalledTimes(1);
    })
})