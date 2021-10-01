import { Fragment } from "react"
import './logo.scss'


export default function LogoContainer() {
  return (
    <Fragment>
      <div className='header__logo'>
        <a className='header__logo-link' href='##'><img className="header__logo-icon" 
         src='img/icon/header-logo.svg' alt="header-logo-icon" />ЛИГА Банк</a>
      </div>
    </Fragment>
  );
};