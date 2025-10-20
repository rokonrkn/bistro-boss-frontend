import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loginUser, setUser] = useState(null);
  const [jwtToken, setToken] = useState(null);
  const [loader, setLoader] = useState(true);
  const [cart, setCart] = useState([]);

  console.log("cart items:", cart);

  // 🔹 Load user & token
  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    const savedToken = localStorage.getItem("authToken");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }

    setLoader(false);
  }, []);

  // 🔹 Load cart from localStorage when app refreshes
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // 🔹 Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🔹 Login
  const login = (user, token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("authUser", JSON.stringify(user));
    localStorage.setItem("authToken", token);
  };

  // 🔹 Logout
  const logOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authUser");
    localStorage.removeItem("authToken");
  };

  // 🔹 Add item to cart
  const handleAddToCart = (item) => {
    const oldData = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...oldData, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  // 🔹 Remove item from cart
  const handleRemoveCartItem = (item) => {
    const oldData = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = oldData.filter(cartItem => cartItem._id !== item._id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        jwtToken,
        login,
        logOut,
        loader,
        handleAddToCart,
        handleRemoveCartItem,
        cart
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
