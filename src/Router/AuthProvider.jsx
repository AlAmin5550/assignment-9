import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const googleSignUp = () => {
        return signInWithPopup(auth,googleProvider);
    }
    const githubSignUp = () => {
        return signInWithPopup(auth,githubProvider)
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }



    const authInfo = {user , createUser , googleSignUp,githubSignUp,signIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node,
}