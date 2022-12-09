import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../Auth/authSlice";
import "./Header.css"

export default function Header() {

    const dispatch = useDispatch();

    const { username, isLoggedIn } = useSelector(state => state.auth);

    return (
        <nav className="header">
            <div className="welcome-message">Hi {isLoggedIn ? username : 'Guest'}!</div>
            <button onClick={() => { dispatch(logoutUser()) }}>Logout</button>
        </nav>
    )
}