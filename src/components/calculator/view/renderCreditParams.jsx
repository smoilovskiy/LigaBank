import React, { useState } from 'react';
import '../calculator.scss';

const CREDIT_COST_INIT = 2000000;

function RenderCreditParams(props) {
  
const step2 = 'Шаг 2. Введите параметры кредита';
const realEstateCost = 'Стоимость недвижимости';
const carCost = 'Стоимость автомобиля';

const [creditCost, setCreditCost] = useState(CREDIT_COST_INIT);
function decreaseCreditCost() {
  setCreditCost(creditCost - 100000)
}

function increaseCreditCost() {
  setCreditCost(creditCost + 100000)
}


const creditParams = [
  <div className='mortgage-credit-params'>
    <p className='calculator__steps-text'>{step2}</p>
    <p className='credit-params-subtitle'>{realEstateCost}</p>
    <div className='credit-selector-condensed'>
      <img className='minus-img' src='./img/icon/minus.svg' alt='minus-img' onClick={decreaseCreditCost}></img>
      <p className='credit-cost'>{creditCost.toLocaleString('ru')} рублей</p>
      {/* <input className='credit-cost' value={creditCost}/> */}
      <img className='plus-img' src='./img/icon/plus.svg' alt='minus-img' onClick={increaseCreditCost}></img>
    </div>
  </div>,
  <div className='car-credit-params'>
    <p className='calculator__steps-text'>{step2}</p>
    <p className='credit-params-subtitle'>{carCost}</p>
    <div className='credit-selector-condensed'>
      <img className='minus-img' src='./img/icon/minus.svg' alt='minus-img' onClick={decreaseCreditCost}></img>
      <p className='credit-cost'>{creditCost.toLocaleString('ru')} рублей</p>
      <img className='plus-img' src='./img/icon/plus.svg' alt='minus-img' onClick={increaseCreditCost}></img>
    </div>
  </div>
];

return creditParams[props.param]
}

export default RenderCreditParams;