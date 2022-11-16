import { useEffect } from "react";
import { createContext, useState } from "react";

const SomeContext = createContext();

function SomeContextProvider({ children }) {

    const storageLogin = localStorage.getItem('my-login');
    const [login, setLogin] = useState(storageLogin);


    useEffect(() => {
        localStorage.setItem('my-login', login);
    }, [login]);

    return (
        <SomeContext.Provider value={{ login, setLogin }}>
            {children}
        </SomeContext.Provider>
    )
}

export { SomeContext, SomeContextProvider };