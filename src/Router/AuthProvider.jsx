import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    const githubSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
   
    useEffect(()=>{
        const unSubscribe  =  onAuthStateChanged(auth,currentUser => {
              console.log('Observing current user', currentUser);
              setUser(currentUser);
              setLoading(false);
          });
          return () => {
              unSubscribe();
          }
      },[])



    const authInfo = {user , createUser , googleSignUp,githubSignUp,signIn, loading,setLoading}
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