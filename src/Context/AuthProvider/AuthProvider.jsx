import { pre } from 'framer-motion/client';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loginUser, setUser] = useState(null);
  const [jwtToken, setToken] = useState(null);
  const [loader, setLoader] = useState(true);

  const [addCart , setAddCart] = useState(() =>{
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const totalAddedAmount = addCart.reduce(
  (total, item) => total + parseFloat(item.price),
  0
);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(addCart));
  }, [addCart]);

  
  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    const savedToken = localStorage.getItem("authToken");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }

    setLoader(false);
  }, []);


 
  const login = (user, token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("authUser", JSON.stringify(user));
    localStorage.setItem("authToken", token);
  };


  const logOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authUser");
    localStorage.removeItem("authToken");
  };

  const updateCart = (newCart) => {
    setAddCart( prevCart => [...prevCart, newCart]);
    toast.success('Item added to cart');
  };

  const handleRemoveCartItem = (item) => {
    const updatedCart = addCart.filter((cartItem) => cartItem._id !== item._id);
    setAddCart(updatedCart);
    toast.success('Item removed from cart');
  };



  return (
    <AuthContext.Provider
      value={{
        loginUser,
        jwtToken,
        login,
        logOut,
        loader,
        setAddCart,
        updateCart,
        addCart,
        handleRemoveCartItem,
        totalAddedAmount
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
