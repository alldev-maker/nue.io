import React, { useState, useEffect, createContext } from "react";
const AuthContext = createContext();
export const AuthProvider = (props) => {
    return (
        <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
    );
};
export default AuthContext;
