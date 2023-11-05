import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [user,setUser] = useState(null)


    const createUser=(email,password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log("Current user is: ",currentUser)
        })
        return ()=>{
            return unsubscribe()
        }
    })

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
        return createUser(auth, gitHubLoginProvider)
    }

    const signOut=()=>{
        setIsLoading(true)
        return signOut(auth)
    }

    const value = {
        createUser,
        login,
        googleLogin,
        gitHubLogin,
        signOut,
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