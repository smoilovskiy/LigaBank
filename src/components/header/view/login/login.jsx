import { Fragment } from "react"
import './login.scss'

export default function UserAuthContainer() {
  return (
    <Fragment>
      <div className='header__login'>
      <a className='header__login-link' href='##'><img className="header__login-img" 
        src="img/icon/login.svg" alt="header-login-icon" />Войти в Интернет-банк</a>
      </div>
    </Fragment>
  );
};
