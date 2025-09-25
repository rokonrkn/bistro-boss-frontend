
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loginUser, setUser] = useState(null);
    const [jwtToken, setToken] = useState(null);
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        const savedUser = localStorage.getItem("authUser");
        const savedToken = localStorage.getItem("authToken");

        if (savedUser && savedToken) {
            setUser(JSON.parse(savedUser));
            setToken(savedToken);
        }

        setLoader(false)
    }, []);

    const login = (user, token) => {
        setUser(user);
        setToken(token);
        localStorage.setItem("authUser", JSON.stringify(user));
        localStorage.setItem("authToken", token);
    };


    const logOut = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem("authUser");
        localStorage.removeItem("authToken");
    }


    return (
        <AuthContext.Provider
            value={{
                loginUser,
                jwtToken,
                login,
                logOut,
                loader
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;