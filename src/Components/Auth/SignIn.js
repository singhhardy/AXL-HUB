import React from 'react';
import {auth} from '../../firebase';
import firebase from 'firebase/compat/app';


function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
  return (
    <div>
    <button onClick={signInWithGoogle}>SignIn</button>
    </div>
  )
}

export default SignIn