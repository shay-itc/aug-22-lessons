import { useState, useContext } from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput'
import { SomeContext } from '../SomeContext';

function Login() {

    const [email, setEmail] = useState('');

    const { login, setLogin } = useContext(SomeContext)

    return (
        <>
            <TextInput
                label="Email"
                onInputChange={(value) => { setEmail(value) }}
                type="text" />
            <Button text="Login" onClick={() => {
                console.log(email);
                setLogin(email);
            }} />
        </>
    )
}

export default Login;