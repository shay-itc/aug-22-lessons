import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from './authSlice'

export default function Login() {

    const dispatch = useDispatch();

    const sendLogin = async () => {
        const response = await fetch('https://pxmvw7wkhjkhkgjtvjqacajddq0lbhyz.lambda-url.us-east-1.on.aws/')
        const results = await response.json();

        console.log(results)
        dispatch(loginUser(results));
    }

    const username = useRef();
    const password = useRef();

    return (
        <div>
            Login
            <br />
            <input type="text" name="username" ref={username} />
            <br />
            <input type="password" ref={password} />
            <br />
            <button onClick={sendLogin}>Login</button>
        </div>
    )
}