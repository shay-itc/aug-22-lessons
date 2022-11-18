import { useEffect } from "react";
import "./Button.css"

function Button(props) {

    const { text, type, onClick, disabled } = props;

    let scheme = '';
    switch (type) {
        case "primary":
            scheme = 'primary';
            break;
        case "danger":
            scheme = 'danger';
            break;
        default:
            console.log('No type was found')
            break;
    }

    return (
        <>
            <button
                className={`uikit-custom-button ${scheme}`}
                onClick={onClick}
                disabled={disabled ? 'disabled' : ''}
            >
                {text}
            </button>
        </>
    )
}

export default Button;