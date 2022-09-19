import React from 'react';
import {auth} from '../../firebase';


function SignOut() {
    function Signout(){
    }
  return (
    <div>
    <button onClick={() => auth.signOut()}>Sign Out</button>

    </div>
  )
}

export default SignOut