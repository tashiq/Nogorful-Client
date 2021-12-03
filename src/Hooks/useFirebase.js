import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initAuthentication from '../Firebase/firebase.init';

initAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState([]);
    const [error, setError] = useState('')
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
    const createUser = (email, pass, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                setUser(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                navigate('/home');
            })
            .catch(err => setError(err.code))
        setIsLoading(false);
    }
    const emailSignIn = (email, pass, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                setUser(result.user);
                const whereTo = location.state.from.pathname || '/home';
                // console.log(whereTo);
                navigate(whereTo);
            })
            .catch(err => setError(err.code))
        setIsLoading(false)
    }
    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, user => {
            if (user) setUser(user);
            else setUser({})
        })

        setIsLoading(false);
    }, [])
    return {
        user, error, isLoading, googleSignIn, logOut, createUser, emailSignIn
    }
};

export default useFirebase;