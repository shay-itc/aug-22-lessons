import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

function Login() {

    const { authApiKey, setAuthApiKey, authName, setAuthName } = useContext(AuthContext);

    console.log('authApiKey', authApiKey, 'authName', authName)

    const [name, setName] = useState(authName);
    const [apiKey, setApiKey] = useState(authApiKey);

    const navigate = useNavigate();

    const setAuthDetails = () => {
        setAuthApiKey(apiKey)
        setAuthName(name)

        navigate('/search/default')
    }

    useEffect(() => {
        setName(authName);
        setApiKey(authApiKey);
    }, [authName, authApiKey])


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


// Get deafult values from localforage to the auth context
// from the auth context set the default values to the login form

