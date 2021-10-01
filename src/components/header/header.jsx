import { Fragment } from "react"
import LogoContainer from "./view/logo/logo"
import MenuContainer from "./view/menu/menu"
import UserAuthContainer from "./view/login/login"
import './header.scss'



const Header = () => {
  return (
    <Fragment>
      <div className='header'>
        <LogoContainer />
        <MenuContainer />
        <UserAuthContainer />

      </div>
    </Fragment>
  );
};

export default Header;