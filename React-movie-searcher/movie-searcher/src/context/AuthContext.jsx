import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import localForage from "localforage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {

    const [authApiKey, setAuthApiKey] = useState('');
    const [authName, setAuthName] = useState('');

    useEffect(() => {
        localForage.setItem('movie-search-credentials', {
            apiKey: authApiKey,
            name: authName
        });
    }, [authApiKey, authName])

    return (
        <AuthContext.Provider value={{ authApiKey, setAuthApiKey, authName, setAuthName }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthContextProvider };