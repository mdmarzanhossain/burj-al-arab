import React, {useContext} from 'react';
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from "./firebase.config";
import './Login.css';
import {UserContext} from "../../App";
import {useHistory, useLocation} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = () => {
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const app = initializeApp(firebaseConfig);

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    const auth = getAuth();

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const {displayName, email} = result.user;
                const signInUser = {name: displayName, email};
                setLoggedInUser(signInUser);
                //console.log(loggedInUser);
                storeAuthToken();
                history.replace(from);
                // ...
            }).catch((error) => {
                console.log(error.code,error.message);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function(idToken) {
            sessionStorage.setItem('token',idToken);
        }).catch(function(error) {
            console.log(error);
        });
    }

    return (
        <div>
            <h1>This is login</h1>
            <button className="google-btn" onClick={handleGoogleSignIn}><FontAwesomeIcon className="icon-google" icon={faGoogle} /> Sign in with Google</button>
        </div>
    );
};

export default Login;