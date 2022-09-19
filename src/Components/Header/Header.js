import './Header.css';
import {auth} from '../../firebase';
import SignIn from '../Auth/SignIn';
import SignOut from '../Auth/SignOut';
import {useAuthState} from 'react-firebase-hooks/auth';

function Header(){
    const [user] = useAuthState(auth)
    return(
        <div>
        <header>
    <div class="nav nav-box-shadow">
      <input type="checkbox" id="nav-check"></input>
      <div class="nav-header">
          <div class="nav-title">
              <img src="Axllogo.png" class="navbar-brand-img" alt="Logo" />
          </div>
      </div>
      <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>  
            <span></span>
          </label>
      </div>
      <div class="nav-items">
          <a href="/">Home</a>
          <a href="/Store">Store</a>
          <a href="/Contact">Contact</a>
          <a href="/Cart"><img src='cart.png' width="35px"></img></a>
          <input type="checkbox" id="nav-dropdown"></input>
          <label for="nav-dropdown"><img src="user.png" width="35px" /></label>
          <ul class="nav-dropdown-list">
          <li>{user ? <SignOut/> : <SignIn />}</li>
          </ul>
      </div>
  </div>
  </header>        
      </div>
    )
}

export default Header;