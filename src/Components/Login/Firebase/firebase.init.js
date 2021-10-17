
import { initializeApp } from "firebase/app";

import firebaseConfig from './firebase.config';

const AuthenticationFirebase = () => {
    return initializeApp(firebaseConfig)
};


export default AuthenticationFirebase;