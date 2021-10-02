import { Fragment } from "react"
import './login.scss'

export default function UserAuthContainer() {
  return (
    <Fragment>
      <div className='header__login'>
        <a className='header__login-link' href='##'><img className="header__login-img"
          src="img/icon/login.svg" alt="header-login-icon" />
          <span className='header__login-link-text'>Войти в Интернет-банк</span>
        </a>
      </div>
    </Fragment>
  );
};
