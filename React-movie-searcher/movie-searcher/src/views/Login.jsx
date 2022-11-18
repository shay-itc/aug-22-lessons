import { useState, useContext } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

function Login() {

    const { authApiKey, setAuthApiKey, authName, setAuthName } = useContext(AuthContext);

    const [name, setName] = useState(authName);
    const [apiKey, setApiKey] = useState(authApiKey);

    const setAuthDetails = () => {
        setAuthApiKey(apiKey)
        setAuthName(name)
    }


    return (
        <div className='login-container'>
            <div className='inner-login'>
                <TextInput label="Name"
                    defaultValue={name}
                    type="text"
                    onInputChange={(eventValue) => {
                        setName(eventValue)
                    }} />
                <TextInput label="API Key"
                    defaultValue={apiKey}
                    type="text"
                    onInputChange={(eventValue) => {
                        setApiKey(eventValue)
                    }} />
                <Button type="primary" text="Login!" onClick={() => {
                    setAuthDetails()
                }} />
            </div>
        </div>
    )
}

export default Login;