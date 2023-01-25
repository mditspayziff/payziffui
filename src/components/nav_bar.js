import Logo from "./logo";
import { IconContext } from "react-icons";
import {CgProfile} from 'react-icons/cg';
import {RxHamburgerMenu} from 'react-icons/rx';
import '../styles/navbar.scss'

function NavBar() {
    return (
      <div className="pz-navbar">
          <Logo />
          <div className="icons">
            <IconContext.Provider value={{ className: "profile", size: 40}}>
              <CgProfile />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "profile burger", size: 40}}>
              <RxHamburgerMenu />
            </IconContext.Provider>
          </div>
      </div>
    );
  }
  
  export default NavBar;