import { useEffect, useState } from 'react';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import AuthenticationFirebase from '../Components/Login/Firebase/firebase.init';

AuthenticationFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errora, setErrora] = useState('');
    const auth = getAuth();



    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
                // ...
            }).catch((error) => {
                setErrora(error.message);
                console.log(errora);
            });
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
                console.log('User is signed out');
            }
        })
        return () => unsubscribed;
        // eslint-disable-next-line
    }, [])


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.');

        }).catch((error) => {
            // An error happened.
            console.log(' An error happened. during signed out');

        });
    }
    return {
        user,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;