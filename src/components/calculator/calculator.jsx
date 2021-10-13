import React from "react";
import { Fragment } from "react"

import './calculator.scss'


function renderDropDown() {
  return React.cloneElement(this.doRender(), {
    style: {border: '1px solid red'}
});
  // credit-selector__drop-down.
}


function Calculator() {
  const step1 = 'Шаг 1. Цель кредита';





  return (
    <Fragment>
      <div className='calculator__container'>
        <h3 className='calculator__title'>Кредитный калькулятор</h3>
        <p className='calculator__steps-text'>{step1}</p>

        <div className='credit-selector'>
          <p className='credit-selector__title'>Выберите цель кредита</p>
          <img className='credit-selector__arrow' src='./img/icon/arrow-down.svg' alt='credit-selector-arrow' onClick={renderDropDown}></img>
        </div>
        <div className='credit-selector__drop-down'>
          <div className='mortgage-credit-lending'>

          </div>
          <div className='car-credit-lending'>

          </div>
        </div>


        {/* <select className='step-selector'>
          <option className='step-option-default' disabled selected>Выберите цель кредита</option>
          <option className='step-option' value="mortgage-credit-lending">Ипотечное кредитование</option>
          <option className='step-option' value="car-credit-lending">Автомобильное кредитование</option>
        </select> */}
      </div>
    </Fragment>
  );
};

export default Calculator