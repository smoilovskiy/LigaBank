import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Fragment } from "react";
import './modalLoginForm.scss'


function ModalLoginForm() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };


  return (
    <Fragment>
      <div className="modal-login__background">
        <div className="modal-login__container">
          <div className="modal-login__inner">


            <img className="modal-login__logo" src="img/icon/modal-logo.svg" alt="logo" />
            <p className="modal-login__logo-title">Лига Банк</p>
            <p className="modal-login__logo-subtitle">интернет-банк</p>


            <a className="close-cross" href="##">
              <img className="close-cross__image" src="img/icon/close-cross.svg" alt="close-cross" />
            </a>


            <form className="modal-login__form">

              <label className="modal-login__login-label">Логин
                <input className="modal-login__login-input" type="text" name="login" />
                {/* ref={register({ required: "This is required." })} */}
              </label>

              <div className="modal-login__password">
                <label className="modal-login__password-label">Пароль
                  <input className="modal-login__password-input" type="text" name="password" />
                  {/* ref={register({ required: "This is required." })} */}
                  <span className="eye-closed" onClick={togglePasswordVisiblity}></span>
                </label>
              </div>

              <a className="pass-forget" href="##">
                <p className="pass-forget__text">Забыли пароль?</p>
              </a>

              <button className="modal-login__button" type="submit" href="##" onClick={handleSubmit(onSubmit)}>Войти</button>

            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalLoginForm;