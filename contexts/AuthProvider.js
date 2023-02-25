import app from "@/configs/firebase.config";
import { createContext, useEffect, useState } from "react";
import {getAuth, onAuthStateChanged} from 'firebase/auth'

// Creating Auth Context
export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {



// states to store user and the loading phase
const [user, setUser] = useState(null) ;
const [loading, setLoading] = useState(true)


// Monitoring the state of current user
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
console.log("Current logged in user", currentUser)
setUser(currentUser) ;
setLoading(false)
})
return () => unsubscribe() ;

}, [])


const authInfo = {user}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;