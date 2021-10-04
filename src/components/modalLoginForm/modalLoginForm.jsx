import { Fragment } from "react"
import './modalLoginForm.scss'


function ModalLoginForm() {
  return (
    <Fragment>
      <div className="modal-login__background">
        <div className="modal-login__container">
          <div className="modal-login__inner">


            <img className="modal-login__logo" src="img/icon/modal-logo.svg" alt="logo" />
            <p className="modal-login__logo-title">Лига Банк</p>
            <p className="modal-login__logo-subtitle">интернет-банк</p>


            <a className="close-cross" href="##">
              <img class="close-cross__image" src="img/icon/close-cross.svg" alt="close-cross" />
            </a>


            <form className="modal-login__form">

              <label className="modal-login__login-label">Логин
                <input className="modal-login__login-input" type="text" name="login" />
              </label>

              <div class="modal-login__password">
                <label className="modal-login__password-label">Пароль
                  <input className="modal-login__password-input" type="text" name="password" />
                  <span className="eye-closed"></span>
                </label>
              </div>

              <a className="pass-forget" href="##">
                <p className="pass-forget__text">Забыли пароль?</p>
              </a>

              <button class="modal-login__button" href="##">Войти</button>

            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalLoginForm;