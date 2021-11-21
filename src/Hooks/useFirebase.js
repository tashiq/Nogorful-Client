import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import initAuthentication from '../Firebase/firebase.init';

initAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(err => setError(err.code))
        setIsLoading(false);
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(err => setError(err.code));
        setIsLoading(false);
    }
    const createUser = (email, pass) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => setUser(result.user))
            .catch(err => setError(err.code))
        setIsLoading(false);
    }
    const emailSignIn = (email, pass) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => setUser(result.user))
            .catch(err => setError(err.code))
        setIsLoading(false)
    }
    return {
        user, error, isLoading, googleSignIn, logOut, createUser, emailSignIn
    }
};

export default useFirebase;