import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loginUser, setUser] = useState(null);
    const [jwtToken, setToken] = useState(null);

    console.log(jwtToken)

    // restore user on page refresh
    useEffect(() => {
        const savedUser = localStorage.getItem("authUser");
        const savedToken = localStorage.getItem("authToken");

        if (savedUser && savedToken) {
            setUser(JSON.parse(savedUser));
            setToken(savedToken);
        }
    }, []);

    const login = (user, token) => {
        setUser(user); // ✅ Correct: set the actual user object
        setToken(token);
        localStorage.setItem("authUser", JSON.stringify(user));
        localStorage.setItem("authToken", token);
    };


    return (
        <AuthContext.Provider
            value={{
                loginUser,
                jwtToken,
                login,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;