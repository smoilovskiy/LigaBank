import React, { useState, createRef } from 'react';

import '../calculator.scss';

const CREDIT_COST_INIT = 2000000;

function RenderCreditParams(props) {

  const step2 = 'Шаг 2. Введите параметры кредита';
  const realEstateCost = 'Стоимость недвижимости';
  const carCost = 'Стоимость автомобиля';
  const [creditCost, setCreditCost] = useState(CREDIT_COST_INIT);
  const [active, setApplyFormActive] = useState({ display: "none" });
  const [initialFeeValue, setInitialFeeValue] = useState(10);
  const [loanTermsValue, setLoanTermsValue] = useState(5);


  const handleInitialFeeChange = e => {
    setInitialFeeValue(e.target.value);
  };

  const handleLoanTermsChange = e => {
    setLoanTermsValue(e.target.value);
  };

  let inputText = createRef();

  function applyFormActive() {
    setApplyFormActive({ display: "block" })
  }

  // function applyForm() {
  //   alert([document.forms["apply-form"].elements["initial-fee"].value,
  //   document.forms["apply-form"].elements["order-number"].value,
  //   document.forms["apply-form"].elements["credit-target"].value])


  //   return false
  // }


  function handleCreditCostInput() {
    setCreditCost(+inputText.current.value)
  }

  console.log(creditCost)

  function decreaseCreditCost() {
    setCreditCost(creditCost - 100000)
  }

  function increaseCreditCost() {
    setCreditCost(creditCost + 100000)
  }


  // const [sliderProps, setSliderProps] = useState({
  //   min: 0,
  //   max: 100,
  //   value: 20,
  //   label: 'This is a reusable slider'
  // });
  // const [sliderValue, setSliderValue] = useState(0);

  // const handleSliderChange = e => {
  //   setSliderValue(e.target.value);
  // };

  // const handleMouseUp = e => {
  //    // do something with sliderValue
  // };


  const creditParams = [
    <div className='mortgage-credit-params'>
      <p className='calculator__steps-text'>{step2}</p>
      <p className='credit-params-subtitle'>{realEstateCost}</p>
      <div className='credit-selector-condensed'>
        <img className='minus-img' src='./img/icon/minus.svg' alt='minus-img' onClick={decreaseCreditCost}></img>
        {/* {<p className='credit-cost'>{creditCost.toLocaleString('ru')} рублей</p>} */}
        <div className='credit-cost-container'>
          {/* <input className='credit-cost' value={creditCost.toLocaleString('ru')}
            onInput={e => setCreditCost(e.target.value)} /> */}

          <input className='credit-cost' ref={inputText} value={creditCost} onChange={handleCreditCostInput} />

          <p className='credit-cost-currency'> рублей</p>
        </div>


        <img className='plus-img' src='./img/icon/plus.svg' alt='minus-img' onClick={increaseCreditCost}></img>
      </div>
      <p className='credit-cost-range'>От 1 200 000  до 25 000 000 рублей</p>

      <p className='credit-params-subtitle'>Первоначальный взнос</p>

      <div className='credit-selector-condensed'>

      </div>

      <input
        type="range"
        className="range-slider"
        min={10}
        step={5}
        // max={max}
        value={initialFeeValue}
        onChange={handleInitialFeeChange}
      />

      <p className='credit-params-subtitle'>Срок кредитования</p>
      <div className='credit-selector-condensed'>

      </div>

      <input
        type="range"
        className="range-slider"
        min={5}
        max={30}
        value={loanTermsValue}
        onChange={handleLoanTermsChange}
      />

      <div className='chekbox-container'>
        <input
          type="checkbox"
          className="credit-params-checkbox"
        // min={min}
        // max={max}
        // value={credit}
        // onChange={changeCallback}
        />
        <p className="checkbox-container-text">Использовать материнский капитал</p>
      </div>

      <div className='our-offer'>
        <div className='our-offer__inner'>
          <div className='our-offer__inner-left'>
            <p className='our-offer__title'>Наше предложение</p>
            <p className='amount-value'>{creditCost.toLocaleString('ru')} рублей</p>
            <p className='amount-subtitle'>Сумма ипотеки</p>
            <p className='amount-value'>{(creditCost / 5).toLocaleString('ru')} рублей</p>
            <p className='amount-subtitle'>Ежемесячный платеж</p>
          </div>

          <div className='our-offer__inner-right'>
            <p className='amount-value'>{initialFeeValue} %</p>
            <p className='amount-subtitle'>Процентная ставка</p>
            <p className='amount-value'>{(creditCost / 40).toLocaleString('ru')} рублей</p>
            <p className='amount-subtitle'>Необходимый доход</p>
          </div>

          <a className='our-offer__link-bttn' href='##' onClick={applyFormActive}>Оформить заявку</a>

        </div>
      </div>
      <div className='apply-form-container' style={active}>

        <div className='apply-form__inner'>
          <div className='apply-form__title-container'>
            <p className='apply-form__title'>Шаг 3. Оформление заявки</p>
          </div>
          <form id='apply-form'>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Номер заявки</p>
              <label className='apply-form__data-value'>{creditCost}</label>
              <input type="hidden" name='order-number' value={creditCost / 1000} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Цель кредита</p>
              <label className='apply-form__data-value'>{creditCost}</label>
              <input type="hidden" name='credit-target' value={creditCost / 56} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Стоимость недвижимости</p>
              <label className='apply-form__data-value'>{creditCost} рублей</label>
              <input type="hidden" name='credit-cost' value={creditCost} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Первоначальный взнос</p>
              <label className='apply-form__data-value'>{creditCost} рублей</label>
              <input type="hidden" name='initial-fee' value={creditCost} />
            </div>
            <div className='apply-form__data'>
              <p className='apply-form__data-title'>Срок кредитования</p>
              <label className='apply-form__data-value'>{loanTermsValue} лет</label>
              <input type="hidden" name='loan-terms' value={loanTermsValue} />
            </div>

            <input className='apply-form__customer-name' type="text" name='customer-name' placeholder='ФИО' />
            <div className='apply-form__customer-contacts'>
              <input className='apply-form__customer-phone' type="tel" name='customer-phone' placeholder='Телефон' />
              <input className='apply-form__customer-email' type="mailto" name='customer-email' placeholder='E-mail' />
            </div>

            <button type='submit' className='apply-form__submit-button' onClick>Отправить</button>
          </form>
        </div>
      </div>

    </div>

    ,
    <div className='car-credit-params'>
      <p className='calculator__steps-text'>{step2}</p>
      <p className='credit-params-subtitle'>{carCost}</p>
      <div className='credit-selector-condensed'>
        <img className='minus-img' src='./img/icon/minus.svg' alt='minus-img' onClick={decreaseCreditCost}></img>
        <p className='credit-cost'>{creditCost.toLocaleString('ru')} рублей</p>
        <img className='plus-img' src='./img/icon/plus.svg' alt='minus-img' onClick={increaseCreditCost}></img>
      </div>

      <div className='our-offer'>

      </div>
    </div>


  ];

  return creditParams[props.content]
}

export default RenderCreditParams
