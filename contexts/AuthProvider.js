import app from "@/configs/firebase.config";
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

// Creating Auth Context
export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {



// states to store user and the loading phase
const [user, setUser] = useState(null) ;
const [loading, setLoading] = useState(true)



// Creating a new user
const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// Logging in a user with email and password
const logIn = (email, password) => {
    setLoading(true) ;
    return signInWithEmailAndPassword(auth, email, password)
}


// Logging in a user Google account]
const googleLogIn = (provider) => {
    setLoading(true) ;
    return signInWithPopup(auth, provider)
}

// Updating a user info to firebase
const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
}


// Logging Out a user
const logOut = () => {
    setLoading(true)
    return signOut(auth)
}


// Monitoring the state of current user
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
console.log("Current logged in user", currentUser)
setUser(currentUser) ;
setLoading(false)
})
return () => unsubscribe() ;

}, [])


const authInfo = {user, loading, setLoading, createNewUser, logIn, googleLogIn, logOut, updateUserProfile, setUser}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;