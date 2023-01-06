import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';
import './Login.css';



function Login() {

    const { authApiKey, setAuthApiKey, authName, setAuthName } = useContext(AuthContext);

    const [name, setName] = useState(authName);
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const setAuthDetails = async () => {

        try {
            const repsonse = await fetch('http://localhost:3000/login', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: name, password: password })
            })

            switch (repsonse.status) {
                case 401:
                    alert('Wrong username or password')
                    break;
                case 500:
                    alert('Internal error')
                    break;
                case 200:
                    const result = await repsonse.json();
                    setAuthName(name)
                    setAuthApiKey(result.token)

                    navigate('/search/default')
                    break;
            }
        } catch (e) {

        }


        // Change ApiKey field to password
        // When submitting send a fetch request to the new /login route and print the token received

    }

    // useEffect(() => {
    //     setName(authName);
    //     setApiKey(authApiKey);
    // }, [authName, authApiKey])


    return (
        <div className='login-container'>
            <div className='inner-login'>

                <TextInput label="Name"
                    defaultValue={name}
                    type="text"
                    onInputChange={(eventValue) => {
                        setName(eventValue)
                    }} />

                <TextInput label="Password"
                    defaultValue={password}
                    type="password"
                    onInputChange={(eventValue) => {
                        setPassword(eventValue)
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

