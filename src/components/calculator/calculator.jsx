import { Fragment } from "react"

import './calculator.scss'


function Calculator() {
  const step1 = 'Шаг 1. Цель кредита';

  return (
    <Fragment>
      <div className='calculator__container'>
        <h3 className='calculator__title'>Кредитный калькулятор</h3>
        <p className='calculator__steps-text'>{step1}</p>
        <select className='step-selector'>
          <option className='step-option-default' disabled selected>Выберите цель кредита</option>
          <option className='step-option' value="mortgage-credit-lending">Ипотечное кредитование</option>
          <option className='step-option' value="car-credit-lending">Автомобильное кредитование</option>
        </select>
      </div>
    </Fragment>
  );
};

export default Calculator