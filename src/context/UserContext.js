import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {

    const [isSignedIn, setIsSignedIn] = useState(false);

    return 
        <UserContext.Provider>
            
        </UserContext.Provider>
}