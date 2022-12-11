import { useState } from "react";

export default function CustomInput(props) {

    const [inputValue, setInputValue] = useState('');

    const inputOnChange = (e) => {
        console.log('inside component', e.target.value);
        setInputValue(e.target.value)
        if (props.parentValueChanged) {
            props.parentValueChanged(e.target.value);
        }
    }

    return (
        <>
            <input type="text" value={inputValue} onChange={inputOnChange} />
        </>
    )
}