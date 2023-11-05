import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { redirect } from "react-router-dom";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [user,setUser] = useState(null)


    const createUser=(email,password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const googleLogin=()=>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubLogin=()=>{
        setIsLoading(true)
        const gitHubLoginProvider = new GithubAuthProvider()
        return signInWithPopup(auth, gitHubLoginProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setIsLoading(false)
            console.log("Current user is: ",currentUser)
        })
        return ()=>{
            return unsubscribe()
        }
    })

    const value = {
        createUser,
        login,
        googleLogin,
        gitHubLogin,
        isLoading,
        user
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;